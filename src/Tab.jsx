import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Stack
} from "@material-ui/core";
// import PeopleIcon from "@material-ui/icons/People";

const Tab = (props) => {
  const { isActive, text, onClickCallback } = { ...props };

  const onCardClick = () => onClickCallback(text);

  return (
    <Card
      elevation={2}
      style={{
        background: isActive ? "#008e5c" : "white",
        color: isActive ? "white" : "#008e5c",
        width: "100%"
      }}
    >
      <CardActionArea onClick={onCardClick}>
        <CardContent>
          <Stack direction="row" spacing={1}>
            {/* <PeopleIcon /> */}
            <Typography
              style={{
                textTransform: "uppercase",
                fontWeight: "700",
                fontSize: "0.9rem"
              }}
            >
              {text}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Tab;
