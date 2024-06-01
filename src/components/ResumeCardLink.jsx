import React from 'react'
import { Group, Text, Card, darken, em} from '@mantine/core'
import { IconArrowWaveRightUp, IconCertificate, IconDownload } from '@tabler/icons-react'
import HoverLink from './HoverLink.jsx'
import { useHover } from '@mantine/hooks'
import ExternalLink from './ExternalLink.jsx'

const ResumeCardLink = (props) => {
    const {hovered, ref} = useHover();
    return (
        <Card 
            w={em(300)}
            px="md"
            py="xs"
            radius={"lg"}
            ref={ref}
            className='workedu-card'
            bg={hovered ? "var(--mantine-color-coal)" : darken("var(--mantine-color-red-9)", 0.75)}
            style={{overflow: "visible"}}
        >
            <Group gap={'xs'} justify='space-between' preventGrowOverflow>
                
                <HoverLink 
                    text={
                        <Text>
                            view my full resume
                            <IconArrowWaveRightUp stroke={1.2} />
                        </Text>
                    }
                    endcolor={"var(--mantine-color-white)"}
                    link={"img/JayPandyaResume.pdf"}
                    size="md"
                    ta="right"
                />

                <ExternalLink 
                    invertColor
                    icon={props.mobile ? IconDownload : IconCertificate}
                    title={`Click to ${props.mobile ? "download" : "view"}`}
                    href={"img/JayPandyaResume.pdf"}
                />
                
                
            </Group>
        </Card>
    )
}

export default ResumeCardLink;