import React, { forwardRef } from 'react'
import { Stack, Divider, Space, Text } from '@mantine/core'

const Preface = forwardRef((props, ref) => {
    return <Stack ref={ref} px="xl">
        
        <Text>
            Hello! I'm Jay, a software engineer and financial engineer based in the NYC Metro area. 
            With nearly a decade of experience in tech, four years professionally and countless hours on personal projects, 
            I thrive on automating the mundane and crafting custom, minimalistic experiences that make life simpler.
        </Text>
        <Text>
            Currently at <Text span>JPMorgan Chase</Text>, I've migrated outdated UIs into React applications and enhanced our CI/CD pipelines with additional tests, 
            significantly improving deployment efficiency and reducing defects. Driven by perfectionism, simplicity, 
            and a passion for continuous learning, I'm always ready for the next big challenge.
        </Text>
        <Text>
            Outside of work, I spend time on side projects like creating a <Text span>microservices-based IP camera security system</Text> 
            or an <Text span>options profit/loss calculator</Text>. I also extend my master's research in financial engineering to 
            analyze trade data and identify informed trades. But life isn't <Text span>all</Text> about tech and finance; 
            I also love learning about topics ranging from <Text span>astrophysics</Text> and engineering to theology and politics.
        </Text>
        <Text>
            When I'm not coding or learning, you might find me brewing kombucha, playing poker, or making music 
            <Text span>(like mashups that will never see the light of day due to copyright law)</Text>. Or I might be playing video games, 
            often in Hyrule, experimenting with glitches or 100%-ing (yes, that included all Korok seeds—<Text span>in both games</Text>).
        </Text>
        <Space my="lg" />
        
    </Stack>
})

export default Preface