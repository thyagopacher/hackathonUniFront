import React from 'react';
import {
  Link
} from "react-router-dom";
import PropTypes from 'utils/propTypes';

import { Media } from 'reactstrap';

import Typography from 'components/Typography';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Button
  } from 'reactstrap';
 import { FaPlus } from "react-icons/fa";

const ProjectCardItem = ({ image, title, description, right, ...restProps }) => {
  return (
     /** atributo key é essencial para demonstrar ao react que são itens distintos */
     <Col md={3}>
     <Card>
       <CardImg top width="100%" src={image} alt="Imagem projeto" />
       <CardBody>
         <CardTitle tag="h5">{title}</CardTitle>
         {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
         <CardText>{description}</CardText>
         <Col className="text-center">
           <Link to={"/project/" + restProps.id}>
             <Button
               title="Clique para ver mais detalhes"
             >
               <FaPlus />
               Veja mais
             </Button>
           </Link>

         </Col>
       </CardBody>
     </Card>
   </Col>
  );
}

ProjectCardItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    right: PropTypes.node,
  };

  
export default ProjectCardItem;
