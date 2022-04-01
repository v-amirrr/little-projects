import React from 'react';
import { useParams } from 'react-router-dom';

import LittleProject1 from './projects/LittleProject1';
import LittleProject2 from './projects/LittleProject2';
import LittleProject3 from './projects/LittleProject3';

const Projects = () => {
    const params = useParams();

    return (
        <div>
                {params.id == 1 && <LittleProject1 />}
                {params.id == 2 && <LittleProject2 />}
                {params.id == 3 && <LittleProject3 />}
        </div>
    );
};

export default Projects;