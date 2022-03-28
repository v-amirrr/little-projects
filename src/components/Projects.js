import React from 'react';
import { useParams } from 'react-router-dom';

import LittleProject1 from './projects/LittleProject1';

const Projects = () => {
    const params = useParams();

    return (
        <div>
            {
                params.id === 1 || <LittleProject1 />
            }
        </div>
    );
};

export default Projects;