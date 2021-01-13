// import React from "react";
// import { Grid } from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';

// import "./Product.css";

// const useStyles = makeStyles((theme) => ({
//   // container: {
//   //   display: 'grid',
//   //   gridTemplateColumns: 'repeat(12, 1fr)',
//   //   gridGap: theme.spacing(3),
//   // },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     whiteSpace: 'nowrap',
//     marginBottom: theme.spacing(5),
//     backgroundColor: 'black',
//   },

// }));
// function Product() {
//   const classes = useStyles();

//   return (
//     <div className="product">

//       <Grid item container spacing={8}>
//         <Grid item className={classes.paper} xs={12} sm={12} md={4} lg={4} className="product__first" >

//          <br/><br/><br/><br/>
//           <p className="product__title">My Heading</p>
//           <p className="product__description">
//             We are engineered that we build for secure business{" "}
//           </p>
//           <a href="#" className="product__link">
//             Read more
//           </a>

//         </Grid>
//         <Grid item xs={12} sm={12} md={4} lg={4} className={classes.paper} className="product__mid">
//         <br/><br/><br/><br/>

//           <p className="product__title">My Heading</p>
//           <p className="product__description">
//             We are engineered that we build for secure business{" "}
//           </p>
//           <a href="#" className="product__link">
//             Read more
//           </a>
//         </Grid>
//         <Grid item xs={12} sm={12} md={4} lg={4} className={classes.paper}  className="product__last">
//         <br/><br/><br/><br/>

//           <p className="product__title">My Heading</p>
//           <p className="product__description">
//             We are engineered that we build for secure business{" "}
//           </p>
//           <a href="#" className="product__link">
//             Read more
//           </a>
//         </Grid>
//       </Grid>

//     </div>
//   );
// }

// export default Product;
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import "./Product.css";

const prod = [
  {
    title: "My Heading",
    description: "Aenean eu leo \n quam. ",
    button: "Read More",
    backgroundColor: "#00bcd4",
    color: "white",
  },
  {
    title: "My Heading",
    description: "Aenean bus, tellu auris  ",
    button: "Read More",
    backgroundColor: "#00bcd4",
    color: "white",
  },
  {
    title: "My Heading",
    description: "Aenean lus ac cursus ,",
    button: "Read More",
    backgroundColor: "#00bcd4",
    color: "white",
  },
  {
    title: "My Heading",
    description: "Aenean eu leo quam.",
    button: "Read More",
    backgroundColor: "#00bcd4",
    color: "white",
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    // gridTemplateColumns: 'repeat(12, 1fr)',
    // gridGap: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "200px",
  },
}));

export default function Product() {
  const classes = useStyles();

  return (
    <div className="product">
      <Grid container spacing={8}>
        <Grid item xs={6} lg={3}>
          <Paper className={classes.paper}>
            <br />
            <br />

            <p className="product__title">My Heading</p>
            <p className="product__description">
              <span> We are engineered that we </span>
              <br />
              <span> build for secure business </span>
            </p>
            <a href="#" className="product__link">
              Read more
            </a>
          </Paper>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Paper className={classes.paper}>
            <br />
            <br />

            <p className="product__title">My Heading</p>
            <p className="product__description">
              <span> We are engineered that we </span>
              <br />
              <span> build for secure business </span>
            </p>
            <a href="#" className="product__link">
              Read more
            </a>
          </Paper>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Paper className={classes.paper}>
            <br />
            <br />

            <p className="product__title">My Heading</p>
            <p className="product__description">
              <span> We are engineered that we </span>
              <br />
              <span> build for secure business </span>
            </p>
            <a href="#" className="product__link">
              Read more
            </a>
          </Paper>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Paper className={classes.paper}>
            <br />
            <br />

            <p className="product__title">My Heading</p>
            <p className="product__description">
              <span> We are engineered that we </span>
              <br />
              <span> build for secure business </span>
            </p>
            <a href="#" className="product__link">
              Read more
            </a>
          </Paper>
        </Grid>
      </Grid>
      <Grid>
       
      </Grid>
    </div>
  );

  {
    /*  <div className="product">
        {prod.map((item, index) => (
          <Grid
          container 
          spacing={8}
          key={index}
          >
            <Grid item xs={6} lg={3}  >
          <Paper style={{backgroundColor: item.backgroundColor}} className={classes.paper}>
            <br/><br/>
        
        <p className="product__title">{item.title}</p>
        <p className="product__description">
        {item.description}
        </p>
       <a href="#" className="product__link">
         {item.button}
       </a>
       </Paper>
        </Grid>
          </Grid> 
        ))}
  
        </div>*/
  }
}
