import React from 'react';
import { Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import AllTasks from './AllTasks';

const TaskList = () => {
    document.title="Tasks List | Task360";
    return (
        <React.Fragment>
            <div className="page-content">       
                <Container fluid>
                    <BreadCrumb title="Tasks List" pageTitle="Tasks" />
                    <AllTasks />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default TaskList;