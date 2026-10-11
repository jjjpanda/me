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

const tagColorMap = {
    "android": "#9e1068",
    "ios": "#9e1068",
    "web app": "#9e1068",
    "mobile web app": "#9e1068",
    "pc app": "#9e1068",
    "html": "#a8071a",
    "xml": "#a8071a",
    "c": "#ad2102",
    "c++": "#ad2102",
    "c#": "#ad2102",
    "matlab": "#d46b08",
    "r": "#d46b08",
    "mongodb": "#d48806",
    "firebase": "#d48806",
    "mysql": "#d48806",
    "excel": "#d48806",
    "java": "#5b8c00",
    "css": "#389e0d",
    "less": "#389e0d",
    "sass": "#389e0d",
    "node.js": "#0050b3",
    "expressjs": "#0050b3",
    "reactjs": "#1d39c4",
    "angularjs": "#1d39c4",
    "vuejs": "#1d39c4",
    "python": "#08979c",
    "bash": "#08979c",
    "typescript": "#531dab",
    "javascript": "#531dab",
    "json": "#531dab",
    "php": "#531dab",
    "options": "#d46b08",
    "trading": "#d48806",
    "finance": "#5b8c00",
    "calculator": "#0050b3",
    "security": "#ad2102",
    "camera": "#08979c",
    "surveillance": "#9e1068",
    "microservices": "#1d39c4",
    "obsidian": "#531dab",
    "plugin": "#389e0d",
    "embeddings": "#08979c",
    "semantic-search": "#0050b3",
    "music": "#9e1068",
    "quiz": "#d46b08",
    "audio": "#1d39c4"
};

function isLightColor(hex) {
    if (!hex || !hex.startsWith('#')) return false;
    const rgb = parseInt(hex.slice(1), 16);
    if (isNaN(rgb)) return false;
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luma > 160;
}

function formatRelativeDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    const now = new Date();
    const diffSeconds = Math.max(0, Math.floor((now - date) / 1000));
    const diffDays = Math.floor(diffSeconds / (60 * 60 * 24));

    if (diffDays === 0) return 'today';
    if (diffDays === 1) return 'yesterday';
    if (diffDays < 30) return `${diffDays}d ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;
    const diffYears = Math.floor(diffDays / 365);
    return `${diffYears}y ago`;
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
            style={{ overflow: "visible" }}
            ref={cardRef}
        >
            <Card.Section p="lg" pb="xs">
                <Group justify="space-between" align="flex-start" wrap="nowrap" gap="sm">
                    <Title
                        ref={titleRef}
                        order={3} 
                        component="a"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ 
                            textDecoration: "none",
                            flex: 1,
                            minWidth: 0,
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                            lineHeight: 1.25
                        }}
                        c={titleHovered ? "var(--mantine-color-orange-4)" : "var(--mantine-color-white)"}
                    >
                        {title}
                    </Title>
                    <Group gap="xs" wrap="nowrap" style={{ flexShrink: 0, paddingTop: 2 }}>
                        {homepage && (
                            <Tooltip label="Live Demo" events={{ hover: true, touch: true }}>
                                <ActionIcon
                                    variant="transparent" 
                                    color="var(--mantine-color-orange-4)"
                                    component="a" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={homepage}
                                    aria-label={`Open live demo for ${title}`}
                                >
                                    <IconWorld size={18} />
                                </ActionIcon>
                            </Tooltip>
                        )}
                        <Tooltip label="GitHub Repo" events={{ hover: true, touch: true }}>
                            <ActionIcon
                                ref={iconRef}
                                variant="transparent" 
                                color={iconHovered ? "var(--mantine-color-white)" : "var(--mantine-color-orange-4)"}
                                component="a" 
                                target="_blank"
                                rel="noopener noreferrer"
                                href={link}
                                aria-label={`Open GitHub repo for ${title}`}
                            >
                                <IconExternalLink size={18} />
                            </ActionIcon>
                        </Tooltip>
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
                                color: isLightColor(languageColors[language]) ? "#000" : "#fff",
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
                                    color={tagColorMap[tag.toLowerCase()] || "gray"}
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