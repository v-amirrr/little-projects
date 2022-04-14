import React from 'react';
import { useParams } from 'react-router-dom';

import LittleProject1 from './projects/LittleProject1';
import LittleProject2 from './projects/LittleProject2';
import LittleProject3 from './projects/LittleProject3';
import LittleProject4 from './projects/LittleProject4';
import LittleProject5 from './projects/LittleProject5';
import LittleProject6 from './projects/LittleProject6';
import LittleProject7 from './projects/LittleProject7';

const Projects = () => {
    const params = useParams();

    return (
        <div>
                {params.id == 1 && <LittleProject1 />}
                {params.id == 2 && <LittleProject2 />}
                {params.id == 3 && <LittleProject3 />}
                {params.id == 4 && <LittleProject4 />}
                {params.id == 5 && <LittleProject5 />}
                {params.id == 6 && <LittleProject6 />}
                {params.id == 7 && <LittleProject7 />}
        </div>
    );
};

export default Projects;