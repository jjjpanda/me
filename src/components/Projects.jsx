import React, { forwardRef } from "react";
import Project from "./Project.jsx";
import { Stack, Divider, Title, SimpleGrid, Space, em, Skeleton } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import useGitHubRepos from "../hooks/useGitHubRepos.jsx";

const Projects = forwardRef((props, ref) => {
    const isThin = useMediaQuery(`(max-width: ${em(props.mobile ? 800 : 1400)})`);
    const { repos, loading } = useGitHubRepos();

    const mappedProjects = (repos || []).map(repo => {
        const extraTopics = (repo.topics || []).filter(
            topic => topic.toLowerCase() !== (repo.language || '').toLowerCase()
        );
        return {
            title: repo.name,
            tags: extraTopics,
            subtitle: repo.description,
            description: null,
            link: repo.html_url,
            homepage: repo.homepage,
            stars: repo.stargazers_count,
            language: repo.language,
            pushedAt: repo.pushed_at
        };
    });

    return (
        <Stack ref={ref} px="xl">
            <Divider my="md" />
            <Space my="lg" />

            <Title order={2}>
                Projects
            </Title>
            
            {loading ? (
                <SimpleGrid 
                    cols={isThin ? 1 : 2} 
                    spacing={"xs"} 
                    verticalSpacing={"xs"}
                >
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Skeleton 
                            key={`project-skeleton-${index}`}
                            height={180}
                            radius="lg"
                        />
                    ))}
                </SimpleGrid>
            ) : (
                <SimpleGrid 
                    cols={isThin ? 1 : 2} 
                    spacing={"xs"} 
                    verticalSpacing={"xs"}
                >
                    {mappedProjects.map((project, index) => (
                        <Project 
                            key={`project-card-${project.title || index}`}
                            project={project}
                        />
                    ))}
                </SimpleGrid>
            )}

            <Space my="lg" />
        </Stack>
    );
});

export default Projects;