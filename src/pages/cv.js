import React from "react";

import styled from "styled-components";

const Page = styled.article`
    min-width: 210mm;
    width: 210mm;
    min-height: 297mm;
    height: 297mm;
    -webkit-print-color-adjust: exact;

    @page {
        size: A4;
        margin: 0;
    }
    
    @media print {
        html, body {
            width: 210mm;
            height: 297mm;
            overflow: hidden;
        }
    }
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    
    @media screen {
        padding: 3rem 0;
    }
    
    background-color: #ccc;
`

const Biography = ({bio}) => (
    <blockquote
        className="leading-normal font-serif text-lg font-bold tracking-tighter -ml-12 border-l-8 border-black py-4 pl-10 mb-2">{bio}
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
const Job = ({company, role, start_date, end_date, descriptionVisible, description, key_points}) => (
    <div className="mb-6">
        <h2 className="text-2xl font-bold font-sans tracking-tighter">{company}</h2>
        <h3 className="italic text-gray-700 font-sans tracking-tighter mb-2">{role},{" "}
            {shortDate(start_date)} - {end_date ? shortDate(end_date) : "Present"}</h3>
        {
            descriptionVisible && (
                <>
                    {
                        description && (
                            <p className="text-sm font-serif tracking-tighter leading-normal mb-2">{description}</p>
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
                </>
            )
        }


    </div>
)

const Join = ({separator, children}) => (
    <>
        {
            React.Children.map(children, (child, i) => {
                if (i < children.length - 1) {
                    return (
                        <>{child}{separator}</>
                    )
                }

                return child
            })
        }
    </>
)

const isVisible = item => item.visible

export default ({data}) => (
    <Container className="page-container">
        <Page className="text-black page border-t-8 border-black bg-white">
            <div className="mx-12 my-4">
                <header className="flex justify-between items-center">
                    <h1
                        className="text-5xl font-bold font-sans tracking-tighter">{data.name}</h1>

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
                    <section className="w-3/5 pr-8">
                        {
                            data.jobs && data.jobs.filter(isVisible).map(job => (
                                <Job key={job.company} {...job}/>
                            ))
                        }
                    </section>
                    <section className="w-2/5">
                        {
                            data.skills && (
                                <div className="flex flex-wrap content-center">
                                    {
                                        <Join separator={<p className="mx-1 text-gray-500">•</p>}>
                                            {
                                                data.skills.filter(isVisible).map(skill => (
                                                    <p key={skill} className="text-sm mb-2 mx-1 font-serif">{skill.skill}</p>
                                                ))
                                            }
                                        </Join>
                                    }
                                </div>
                            )
                        }

                        {
                            data.education && (
                                <>
                                    <h2 className="text-2xl font-bold font-sans tracking-tighter mb-2">Education</h2>
                                    {
                                        data.education.filter(isVisible).map(education => (
                                            <div key={education.institution + ":" + education.qualification}>
                                                <h3 className="text-xl font-bold font-sans tracking-tighter">{education.institution}</h3>
                                                <p className="text-sm font-serif tracking-tighter leading-normal mb-4">{education.qualification} - {education.grade}</p>
                                            </div>
                                        ))
                                    }
                                </>
                            )
                        }
                        {
                            data.projects && (
                                <>
                                    <h2 className="text-2xl font-bold font-sans tracking-tighter mb-2">Awards &
                                        Projects</h2>
                                    {
                                        data.projects.filter(isVisible).map(project => (
                                            <div key={project.name}>
                                                <h3 className="text-xl font-bold font-sans tracking-tighter">{project.name}</h3>
                                                {
                                                    project.date.visible && project.date.date && (
                                                        <h3 className="italic text-gray-700 font-sans tracking-tighter mb-2">{shortDate(project.date.date)}</h3>
                                                    )
                                                }
                                                {
                                                    project.description.visible && project.description.description && (
                                                        <p className="text-sm font-serif tracking-tighter leading-normal mb-4">{project.description.description}</p>
                                                    )
                                                }
                                            </div>
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
