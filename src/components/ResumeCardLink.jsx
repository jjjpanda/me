import React from 'react'
import { Group, Text, Image, rem, Box, Card, darken, em} from '@mantine/core'
import { IconArrowWaveRightUp } from '@tabler/icons-react'
import HoverLink from './HoverLink.jsx'
import { useHover } from '@mantine/hooks'

const ResumeCardLink = (props) => {
    const {hovered, ref} = useHover();
    return (
        <Card 
            w={em(400)}
            px="md"
            py="xs"
            radius={"lg"}
            ref={ref}
            className='workedu-card'
            bg={hovered ? "var(--mantine-color-coal)" : darken("var(--mantine-color-red-9)", 0.75)}
            style={{overflow: "visible"}}
        >
            <Group gap={'xs'} justify='space-between' preventGrowOverflow>
                <Box
                    component='a'
                    href="img/JayPandyaResume.pdf"
                    target='_blank'
                >
                    <Image 
                        radius={"xl"}
                        h={rem(40)}
                        src={"img/icons/orangeIcon.png"}
                    />
                </Box>
                
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
            </Group>
        </Card>
    )
}

export default ResumeCardLink;