import React from 'react';
import { Card, Group, Stack, Text, Title, ActionIcon, Badge, darken, Tooltip } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { IconExternalLink, IconStar, IconWorld } from '@tabler/icons-react';
import HoverLink from './HoverLink.jsx';

const languageColors = {
    "JavaScript": "#f1e05a",
    "TypeScript": "#3178c6",
    "Python": "#3572A5",
    "C#": "#178600",
    "Java": "#b07219",
    "HTML": "#e34c26",
    "CSS": "#563d7c",
    "C++": "#f34b7d",
    "C": "#555555",
    "Shell": "#89e051",
    "Jupyter Notebook": "#DA5B0B",
    "Go": "#00ADD8",
    "Rust": "#dea584",
    "Ruby": "#701516",
    "PHP": "#4F5D95"
};

const tagColor = {
    "Android": "#9e1068",
    "iOS": "#9e1068",
    "Web App": "#9e1068",
    "Mobile Web App": "#9e1068",
    "PC App": "#9e1068",
    "HTML": "#a8071a",
    "XML": "#a8071a",
    "C": "#ad2102",
    "C++": "#ad2102",
    "C#": "#ad2102",
    "MATLAB": "#d46b08",
    "R": "#d46b08",
    "MongoDB": "#d48806",
    "Firebase": "#d48806",
    "mySQL": "#d48806",
    "Excel": "#d48806",
    "Java": "#5b8c00",
    "CSS": "#389e0d",
    "Less": "#389e0d",
    "SASS": "#389e0d",
    "Node.js": "#0050b3",
    "ExpressJS": "#0050b3",
    "ReactJS": "#1d39c4",
    "AngularJS": "#1d39c4",
    "VueJS": "#1d39c4",
    "Python": "#08979c",
    "Bash": "#08979c",
    "TypeScript": "#531dab",
    "JavaScript": "#531dab",
    "JSON": "#531dab",
    "PHP": "#531dab",
};

function formatRelativeDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const now = new Date();
    const diffSeconds = Math.max(0, Math.floor((now - date) / 1000));
    const diffDays = Math.floor(diffSeconds / (60 * 60 * 24));

    if (diffDays === 0) return 'today';
    if (diffDays === 1) return 'yesterday';
    if (diffDays < 30) return `${diffDays}d ago`;
    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths < 12) return `${diffMonths}mo ago`;
    const diffYears = Math.floor(diffDays / 365);
    return `${diffYears}y ago`;
}

function formatTitle(str) {
    if (!str) return '';
    return str
        .replace(/([a-z])([A-Z])/g, '$1\u200B$2')
        .replace(/([a-zA-Z])([0-9])/g, '$1\u200B$2')
        .replace(/([0-9])([a-zA-Z])/g, '$1\u200B$2')
        .replace(/([-_])/g, '$1\u200B');
}

const Project = (props) => {
    const { project } = props;
    const { title, tags, subtitle, description, link, homepage, stars, language, pushedAt } = project;
    const extraTags = (tags || []).filter(
        tag => tag.toLowerCase() !== (language || '').toLowerCase()
    );
    const { hovered: cardHovered, ref: cardRef } = useHover();
    const { hovered: iconHovered, ref: iconRef } = useHover();
    const { hovered: titleHovered, ref: titleRef } = useHover();

    return (
        <Card 
            m="0"
            radius="lg"
            className="project-card"
            key={`card-project-${title}`} 
            bg={cardHovered ? "var(--mantine-color-coal)" : darken("var(--mantine-color-red-9)", 0.65)}
            style={{ overflow: "hidden" }}
            ref={cardRef}
        >
            <Card.Section p="lg" pb="xs">
                <Group justify="space-between" align="flex-start" wrap="nowrap" gap="sm">
                    <Title
                        ref={titleRef}
                        order={3} 
                        style={{ 
                            cursor: "pointer",
                            flex: 1,
                            minWidth: 0,
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                            lineHeight: 1.25
                        }}
                        c={titleHovered ? "var(--mantine-color-orange-4)" : "var(--mantine-color-white)"}
                        onClick={() => {
                            window.open(link, "_blank");
                        }}
                    >
                        {formatTitle(title)}
                    </Title>
                    <Group gap="xs" wrap="nowrap" style={{ flexShrink: 0, paddingTop: 2 }}>
                        {homepage && (
                            <ActionIcon
                                variant="transparent" 
                                color="var(--mantine-color-orange-4)"
                                component="a" 
                                target="_blank"
                                href={homepage}
                                aria-label={`Open live demo for ${title}`}
                            >
                                <Tooltip label="Live Demo" events={{ hover: true, touch: true }}>
                                    <IconWorld size={18} />
                                </Tooltip>
                            </ActionIcon>
                        )}
                        <ActionIcon
                            ref={iconRef}
                            variant="transparent" 
                            color={iconHovered ? "var(--mantine-color-white)" : "var(--mantine-color-orange-4)"}
                            component="a" 
                            target="_blank"
                            href={link}
                            aria-label={`Open GitHub repo for ${title}`}
                        >
                            <Tooltip label="GitHub Repo" events={{ hover: true, touch: true }}>
                                <IconExternalLink size={18} />
                            </Tooltip>
                        </ActionIcon>
                    </Group>
                </Group>
            </Card.Section>

            <Card.Section px="lg" pt="xs" pb="xs">
                <Group gap="xs" align="center">
                    {language && (
                        <Badge 
                            size="sm" 
                            variant="filled"
                            style={{
                                backgroundColor: languageColors[language] || "var(--mantine-color-gray-7)",
                                color: ["JavaScript", "Shell", "HTML"].includes(language) ? "#000" : "#fff",
                                fontWeight: 600
                            }}
                        >
                            {language}
                        </Badge>
                    )}
                    {stars > 0 && (
                        <Group gap={4} align="center">
                            <IconStar size={14} color="var(--mantine-color-yellow-4)" fill="var(--mantine-color-yellow-4)" />
                            <Text size="xs" c="dimmed">{stars}</Text>
                        </Group>
                    )}
                    {pushedAt && (
                        <Text size="xs" c="dimmed">
                            Updated {formatRelativeDate(pushedAt)}
                        </Text>
                    )}
                </Group>
            </Card.Section>

            <Card.Section p="lg" pt="xs">
                <Stack gap="xs">
                    {subtitle && (
                        <HoverLink 
                            text={subtitle}
                            link={link}
                            fw={500}
                        />
                    )}
                    {description && (
                        <Text size="sm">
                            {description}
                        </Text>
                    )}
                    {extraTags && extraTags.length > 0 && (
                        <Group gap="xs" mt="xs">
                            {extraTags.map(tag => (
                                <Badge
                                    radius="md"
                                    size="xs" 
                                    key={`badge-${tag}-${title}`}
                                    color={tagColor[tag] || "gray"}
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </Group>
                    )}
                </Stack>
            </Card.Section>
        </Card>
    );
};

export default Project;