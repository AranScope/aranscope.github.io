import React from "react";

import '../styles/tailwind.css';
import styled from "styled-components";


const Page = styled.article`
    width: 210mm;
    min-height: 297mm;
    -webkit-print-color-adjust: exact;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #ccc;
`

const Biography = ({bio}) => (
    <blockquote
        className="leading-normal font-serif text-lg font-bold tracking-tighter -ml-12 border-l-8 border-black py-4 pl-10 mb-8">{bio}
    </blockquote>
)

function shortDate(date) {
    return new Date(date).toLocaleString('default', {month: 'short', year: 'numeric'})
}

const Li = styled.li`
    &:before {
        position: absolute;
        margin-top: -6px;
        font-size: 1.5em;
        content: "‣";
        margin-left: -12px;
    }
`

// end date, descripotion, points
const Job = ({company, role, start_date, end_date, description, key_points}) => (
    <div>
        <h2 className="text-2xl font-bold font-sans tracking-tighter">{company}</h2>
        <h3 className="italic text-gray-700 font-sans tracking-tighter mb-3">{role} •
            {shortDate(start_date)} - {end_date ? shortDate(end_date) : "Present"}</h3>
        {
            description && (
                <p className="text-sm font-serif tracking-tighter leading-normal mb-4">{description}</p>
            )
        }
        {
            key_points && (
                <ul className="list-outside text-sm font-serif tracking-tighter leading-normal">
                    {
                        key_points.map(point => (
                            <Li key={point}>{point}</Li>
                        ))
                    }
                </ul>
            )
        }

    </div>
)

export default ({data}) => (
    <Container>
        <Page className="page border-t-8 border-black bg-white">
            <div className="mx-12 my-4">
                <header className="flex justify-between items-center">
                    <h1 className="text-5xl font-bold font-sans tracking-tighter">{data.name}</h1>

                    {
                        data.contactInfo && (
                            <div className="text-lg leading-normal font-serif tracking-tighter">
                                {
                                    data.contactInfo.map(contact => (
                                        <a className="block text-right" href={contact.link}>{contact.contact}</a>
                                    ))
                                }
                            </div>
                        )
                    }
                </header>
                {
                    data.biography && (
                        <Biography bio={data.biography}/>
                    )
                }
                <div className="flex">
                    <section className="w-3/5 pr-4">
                        {
                            data.jobs && data.jobs.map(job => (
                                <Job {...job}/>
                            ))
                        }
                    </section>
                    <section className="w-2/5 pr-4">
                        {
                            data.skills && (
                                <div className="flex flex-wrap">
                                    {
                                        data.skills.map(skill => (
                                            <span
                                                className="text-sm mb-2 mx-1 font-serif bg-gray-200 border-2 border-gray-300 px-2 py-1">{skill.skill}</span>
                                        ))
                                    }
                                </div>
                            )
                        }

                        {
                            data.projects && (
                                <>
                                    <h2 className="text-2xl font-bold font-sans tracking-tighter mb-2">Awards &
                                        Projects</h2>
                                    {
                                        data.projects.map(project => (
                                            <>
                                                <h3 className="text-xl font-bold font-sans tracking-tighter">{project.name}</h3>
                                                <p className="text-sm font-serif tracking-tighter leading-normal mb-4">{project.description}</p>
                                            </>
                                        ))
                                    }
                                </>
                            )
                        }
                    </section>
                </div>
            </div>
        </Page>
    </Container>
);
