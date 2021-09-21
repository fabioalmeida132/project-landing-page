import P from "prop-types";
import {GridContent} from "../../components/GridContent";

export const PageNotFound = () => {
  return (
   <GridContent html={'<p>A página que você busca não foi encontrada.</p>'} title={'Error 404'}/>
  );
};

PageNotFound.propTypes = {
  children: P.node.isRequired,
};
