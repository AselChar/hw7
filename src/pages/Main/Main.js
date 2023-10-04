import React, { useState } from "react";
import TabsComponent from "../../components/TabsComponent";
import Souz from "../../components/Souz";
import Organ from "../../components/Organ";
import Projects from "../../components/Projects";


const VALUES = {
    souz: 'souz',
    history: "history",
    organ: 'organ',
    projects: 'projects',
    ourTeam: 'ourTeam'
} 

const GetCategories = ({action}) => {


    switch(action) {
        case VALUES.souz: {
            return <Souz />
        }
        case VALUES.history: {
            return <></>
        }
        case VALUES.organ: {
            return <Organ />
        }
        case VALUES.projects: {
            return <Projects />
        }
        default: {
            return <></>
        }
    }
}

const Main = () => {

    const categoriesSelect = [
        {value: VALUES.souz, label: "О союзе"},
        {value: VALUES.history, label: "История организации"},
        {value:  VALUES.organ, label: "Органы управления и их деятельность"},
        {value: VALUES.projects, label: "Реализуемые проекты"},
        {value: VALUES.ourTeam, label: "Наша команда"}
    ]

    const [value, setValue] = useState(categoriesSelect?.[0].value)

    return (
        <>
            <h1 style={{textAlign:'center'}}>О Союзе МСУ КР</h1>
            <TabsComponent categoriesSelect={categoriesSelect} setValue={setValue} value={value} />
            <GetCategories action={value}  />
        </>

    )
}

export default Main;