import React from "react";
import "./Browsecard.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Browsecard = () => {
  return (
    <div className="section">
      <div className="title"> Browse All </div>
      <div className="browse-cards">
        <Card className="card">
          <CardActionArea>
            <img
              style={{ width: "225px", height: "150px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4XHBpiL9fFBO5R9Eoo7YIOiLeL07gJspmw&usqp=CAU"
              alt="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h4">
                Card title
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="card">
          <CardActionArea>
            <img
              style={{ width: "225px", height: "150px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4XHBpiL9fFBO5R9Eoo7YIOiLeL07gJspmw&usqp=CAU"
              alt="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h4">
                Card title
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="card">
          <CardActionArea>
            <img
              style={{ width: "225px", height: "150px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4XHBpiL9fFBO5R9Eoo7YIOiLeL07gJspmw&usqp=CAU"
              alt="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h4">
                Card title
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Browsecard;
