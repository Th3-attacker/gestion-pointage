import React , {Component} from 'react';

export default class Acceuil extends Component {
    
    render() {
        return(
        <div className="container">
                <h1>RÉSUMÉ</h1>
                <p className="text-justify">
            Lorsque les salariés ne sont pas soumis au même horaire collectif, 
            l’employeur doit mettre en place un système permettant de décompter 
            la durée de travail de chacun des salariés. 
            Les salariés doivent le respecter sous peine de sanction. </p>

            <div className="">
                <p><span class="titre_h4">LES SALARIÉS CONCERNÉS PAR LE DÉCOMPTE INDIVIDUEL</span></p>
                <p>Lorsque l’horaire est collectif et que l’employeur n’a pas mis en œuvre l’aménagement du temps de travail, 
                    il n’est pas obligé de mettre en place un&nbsp;système de pointage, de décompte individuel des heures effectuées. <strong>L’affichage de l’horaire collectif suffit.</strong></p>
                <p>En revanche, il doit tenir un décompte individuel de la durée travaillée&nbsp;lorsque&nbsp;:</p>
                <ul>
                    <li>l’horaire est organisé selon des modalités particulières (travail par relais, par cycles, aménagement sur plusieurs semaines, modulation…)&nbsp;;</li>
                    <li>l’horaire est individualisé&nbsp;;</li>
                    <li>les salariés ont accompli des heures supplémentaires donnant droit à contrepartie obligatoire en repos et/ou repos compensateur de remplacement&nbsp;</li>
                    <li>les salariés ont effectué des heures d’astreinte&nbsp;;</li>
                    <li>les salariés sont à temps partiel.</li>
                    </ul>
                        <p>Cette obligation est assortie d’une sanction pénale si l’employeur ne la respecte pas (3750 € par salarié concerné, article R. 3173-2)</p>
                        </div>
        </div>
        )
    }
}