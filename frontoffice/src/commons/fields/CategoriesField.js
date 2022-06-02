import React from 'react';
import AgricultureAlimentation_PictoCdlT from "../../icons/AgricultureAlimentation_PictoCdlT.png";
import Artisanat_PictoCdlT from "../../icons/Artisanat_PictoCdlT.png";
import Communication_PictoCdlT from "../../icons/Communication_PictoCdlT.png";
import CultureModeVie_PictoCdlT from "../../icons/CultureModeVie_PictoCdlT.png";
import DevTerritorial_PictoCdlT from "../../icons/DevTerritorial_PictoCdlT.png";
import Ecologie_PictoCdlT from "../../icons/Ecologie_PictoCdlT.png";
import Energie_PictoCdlT from "../../icons/Energie_PictoCdlT.png";
import Gouvernance_PictoCdlT from "../../icons/Gouvernance_PictoCdlT.png";
import Habitat_PictoCdlT from "../../icons/Habitat_PictoCdlT.png";
import JusticeSociale_PictoCdlT from "../../icons/JusticeSociale_PictoCdlT.png";
import Mobilite_PictoCdlT from "../../icons/Mobilite_PictoCdlT.png";
import Sante_Bienetre_PictoCdlT from "../../icons/Sante_Bienetre_PictoCdlT.png";
import ScienceTech_PictoCdlT from "../../icons/ScienceTech_PictoCdlT.png";
import { cloneElement, Children } from 'react';
import { useListContext } from 'react-admin';
import { LinearProgress } from '@material-ui/core';


const CategoriesField = ( props ) => {
    const { children } = props;
    const { ids, data, loaded, resource, basePath } = useListContext(props);
   
    const pictoCategories = {
        "agriculture-et-alimentation" : AgricultureAlimentation_PictoCdlT,
        "artisanat-commerce-industrie" : Artisanat_PictoCdlT,
        "decentralisation-du-web" : Communication_PictoCdlT,
        "education-alternative" : CultureModeVie_PictoCdlT,
        "developpement-territorial" : DevTerritorial_PictoCdlT,
        "ecopsychologie" : Ecologie_PictoCdlT,
        "web-semantique" : Energie_PictoCdlT,
        "open-hardware" : Gouvernance_PictoCdlT,
        "tiers-lieu" : Habitat_PictoCdlT,
        "justice-sociale" : JusticeSociale_PictoCdlT,
        "mobilites" : Mobilite_PictoCdlT,
        "sante-et-bien-etre" : Sante_Bienetre_PictoCdlT,
        "low-tech" : ScienceTech_PictoCdlT,
    }

    if (loaded === false) {
    return <LinearProgress />;
    }

    return (
    <div style={{display:'flex'}}>
        {ids.map((id, i) => {
        if( !data[id] ) return null;

        return (
        <div style={{display:'grid', margin:15}}>
            <img src={pictoCategories[id.replace(process.env.REACT_APP_MIDDLEWARE_URL+"sectors/",'')]} alt="logo" style={{width:100, placeSelf:'center'}} title={id}/>
            {cloneElement(Children.only(children), {
                record: data[id],
                resource,
                basePath,
            })}
        </div>
        );
        })}
    </div>
    );
    };

export default CategoriesField;
