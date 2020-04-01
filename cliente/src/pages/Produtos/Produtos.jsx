import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import InsertBook from "../../container/InsertBook";
import Layout from "../../components/Layout";
import UpdateBook from "../../container/UpdateBook";
import { getBooks } from "../../api";
import { getLivros, setTitulo } from "../../store/actions";
import DeleteBook from "../../container/DeleteBook/DeleteBook";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

const Produtos = ({livros, getLivros, setTitulo}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTitulo("");
    setValue(newValue);
  };

  useEffect(() => {
    getBooks()
      .then(response => {
        const data = response.data;
        getLivros(data);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <Layout>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
            style={{backgroundColor: "#2a7886"}}
          >
            <LinkTab icon={<AddCircleIcon />} label="Adicionar" {...a11yProps(0)} />
            <LinkTab icon={<UpdateIcon />} label="Alterar" {...a11yProps(1)} />
            <LinkTab icon={<DeleteIcon />} label="Excluir" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel
          value={value}
          index={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <InsertBook />
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          
        >
          <UpdateBook />
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <DeleteBook />
        </TabPanel>
      </div>
    </Layout>
  );
};

Produtos.propTypes = {
  // bla: PropTypes.string,
};

Produtos.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  livros: state.livraria.livros
});

const mapDispatchToProps = dispatch => ({
  getLivros: livros => {
    dispatch(getLivros(livros));
  },
  setTitulo: titulo => {
    dispatch(setTitulo(titulo));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Produtos);
