function Mendchilgee(){
    return <h1>halo </h1>;
}
function Mendchilgee123(props){
return <h1>{props.ner} </h1>;
}
function Mendchilgee456(props){
    return (
        <div>
    <h1>{props.ner} </h1>;
    <p>{props.nas} </p>;
    </div> )
}
function EtsegComp(props){
    return(
    <div>
        <Mendchilgee/>
        <Mendchilgee123 ner={props.ner}/>
        <Mendchilgee456 ner={props.ner} nas={props.nas}/>
        <table>
        <tr><td>{props.angi[0]}</td></tr>
        <tr><td>{props.angi[1]}</td></tr>
        <tr><td>{props.angi[2]}</td></tr>
        </table>
    </div>
    )
}
ReactDOM.render(
    //<mendchilgee/>,
    //<Mendchilgee123 ner="hello billy"/>,
    //<Mendchilgee456 ner="hello billy" nas='20'/>,
<EtsegComp ner="bill" nas="30" angi={['ПХ','МС', 'НББ']}/>,
    document.getElementById('root')
  );
