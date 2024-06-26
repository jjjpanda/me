
import React, { forwardRef } from "react";
import Project from "./Project.jsx";
import { Stack, Divider, Title, SimpleGrid, Space, em } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';

const projects = [
    {
        title: "CXIA",
        images: [
            'img/projects/cxia/cxia_0.png',
            'img/projects/cxia/cxia_1.png',
            'img/projects/cxia/cxia_2.png',
            'img/projects/cxia/cxia_3.png',
            'img/projects/cxia/cxia_4.png'
        ],
        logo: "img/projects/cxia/cxia.png",
        tags: ["Web App", "HTML", "JavaScript", "CSS", "Google Charts", "JSON", "Excel"],
        subtitle: "Cryptocurrency Exchange Indicator Analysis",
        description: "Using Google Charts and a free JSON REST API for cryptocurrency price data, CXIA charts out different technical indicators of a selected currency.",
        link: "https://www.github.com/jjjpanda/CXIA"
    },
    {
        title: "HTML Visualizer",
        images: [
            'img/projects/vis/vis_0.png',
            'img/projects/vis/vis_1.png',
            'img/projects/vis/vis_2.png'
        ],
        logo: "img/projects/vis/vis.png",
        tags: ["Web App", "HTML", "JavaScript"],
        subtitle: "A Simple Audio Visualizer",
        description: "Pulling from the system microphone, this visualizer logarithmically displays freqencies ranges from 20 HZ to 20 kHz with a Fast Fourier Transform to find amplitudes.",
        link: "https://jjjpanda.github.io/HTML-Visualizer"
    },
    {
        title: "Options Calculator",
        images: [
            'img/projects/options-calc/options-calc_0.png',
            'img/projects/options-calc/options-calc_1.png',
            'img/projects/options-calc/options-calc_2.png'
        ],
        logo: "img/projects/options-calc/options-calc.png",
        tags: ["PC App", "C#", "WPF"],
        subtitle: "A Manual Options Profit Calculator",
        description: "This Windows Form Application is a manual entry options calculator that uses Black Scholes and Newton Raphson to display profit.",
        link: "https://www.github.com/jjjpanda/Options-Calculator"
    },
    {
        title: "RP Interval Quiz",
        images: [
            'img/projects/rp-interval/rp-interval_0.png',
            'img/projects/rp-interval/rp-interval_1.png',
            'img/projects/rp-interval/rp-interval_2.png',
            'img/projects/rp-interval/rp-interval_3.png',
            'img/projects/rp-interval/rp-interval_4.png'
        ],
        logo: "img/projects/rp-interval/rp-interval.png",
        tags: ["Web App", "HTML", "JavaScript", "Less", "ReactJS", "Ant D"],
        subtitle: "In an Attempt to Get Perfect Pitch",
        description: "This quiz web app tests musicians on their ability to identify different musical intervals with custom settings and scaling difficulty based on number of intervals identified correctly.",
        link: "https://jjjpanda.github.io/RP-Interval-Quiz/"
    },
    {
        title: "Outsmart Options",
        images: [
            'img/projects/oo/oo_0.png',
            'img/projects/oo/oo_1.png',
            'img/projects/oo/oo_2.png',
            'img/projects/oo/oo_3.png',
            'img/projects/oo/oo_4.png',
            'img/projects/oo/oo_5.png',
            'img/projects/oo/oo_6.png'
        ],
        logo: "img/projects/oo/oo.png",
        tags: ["Web App", "HTML", "JavaScript", "Node.js", "ExpressJS", "CSS", "Less", "ReactJS", "MongoDB", "Ant D"],
        subtitle: "The Voice of The People",
        description: "Using market data and a simple layout, this web app allows traders to calculate options strategy profit, save strategies to view later and keep watchlists.",
        link: "https://github.com/jjjpanda/OutsmartOptions"
    },
    {
        title: "Chimera",
        images: [
            'img/projects/chimera/chimera_0.png',
            'img/projects/chimera/chimera_1.png',
            'img/projects/chimera/chimera_2.png',
            'img/projects/chimera/chimera_3.png',
            'img/projects/chimera/chimera_4.png'
        ],
        logo: "img/projects/chimera/chimera.png",
        tags: ["Mobile Web App", "HTML", "JavaScript", "Node.js", "ExpressJS", "CSS", "Less", "ReactJS", "Ant D", "IP Camera", "TMUX"],
        subtitle: "Motion Security Camera Dashboard",
        description: "A motion security camera dashboard and server system that works with Motion Project to save images and generate videos from IP cameras.",
        link: "https://www.github.com/jjjpanda/Chimera"
    }
]

projects.reverse();

const Projects = forwardRef((props, ref) => {
    const isThin = useMediaQuery(`(max-width: ${em(props.mobile ? 800 : 1400)})`);

    return (
        <Stack ref={ref} px="xl">
            <Divider my="md" />
            <Space my="lg" />

            <Title order={2}>
                Projects
            </Title>
            
            <SimpleGrid 
                cols={isThin ? 1 : 2} 
                spacing={"xs"} 
                verticalSpacing={"xs"}
            >
                {projects.map((project, index) => {
                    return <Project 
                        key={`project-card-${index}`}
                        project={project}
                    />
                })}
            </SimpleGrid>

            <Space my="lg" />
            
        </Stack>
    )
})

export default Projects