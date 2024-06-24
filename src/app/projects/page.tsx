'use client';
import PageTitle from '@/ui/PageTitle/PageTitle';
import ProjectsListItem from '@/ui/ProjectsListItem/ProjectsListItem';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { Project } from '../types/types';

export default function Projects() {
    const { data: session } = useSession();
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
            try {
                const res =  axios({
                    method: 'GET',
                    url: 'https://yildizskylab-test.onrender.com/api/v1/projects',
                    headers: {
                        'Content-Type': 'application/json',
                        // Authorization: `Bearer ${session?.user?.accessToken}`,
                    },
                })
                .then((res) => res.data.data)
                .then((data) => {
                  setProjects(data);
                });
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        

        
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching projects: {error.message}</div>;
    }

    return (
        <>
            <PageTitle title="Projeler" />
            <div className="flex flex-col items-center justify-center gap-y-8 w-[90%] sm:w-[70%] h-full mx-auto pt-36">
                {projects.length > 0 ? (
                    projects.map((project) => {
                        return (
                            <ProjectsListItem
                                key={project._id}
                                project={project}
                            />
                        );
                    })
                ) : (
                    <div>Proje bulunamadı.</div>
                )}
            </div>
        </>
    );
}
