import { Grid, Paper } from "@material-ui/core";
import { useState } from "react";
import Tab from "./Tab";

const data = [
  {
    text: "Canopy",
    body:
      '<div class="tab-pane fade shadow rounded bg-white p-5 active show" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h4 class="font-italic mb-4">CANOPY</h4>      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p class="font-italic text-muted mb-2"></p><div class="ExternalClass620566CB39C1447A8BE20682650A9B16"><p><strong>Rebranding Challenge </strong>– Canopy approved after 2 rounds of voting.<br><strong>High-level needs prioritization - </strong>Approval in Steerco at the end of October<br><strong>Program communication </strong>-&nbsp; SharePoint opening end of October and the 1st Information forum on November 11<sup>th</sup> and 16<sup>th</sup>.<br><strong>Workshops </strong>- Business Requirements preparation workshops launch at the&nbsp; beginning of November – about 10 workshops held so far, aiming to prepare the BR and to ease the appropriation of the vision by ITG colleagues.</p></div><p></p>     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>'
  },
  {
    text: "Sharepoint initiative",
    body: ""
  },
  {
    text: "A new design for the industrialization site",
    body: ""
  },
  {
    text: "Sharepoint catalog",
    body: ""
  },
  {
    text: "CRT recruits !",
    body: ""
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState(data[0]);

  const onTabClick = (text) => {
    setActiveTab(data.find((element) => element.text === text));
  };

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="stretch"
      justifyContent="center"
    >
      <Grid item md={3}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          {data.map((row) => (
            <Grid item key={row.text} sx={{ width: "100%" }}>
              <Tab
                isActive={activeTab === row}
                text={row.text}
                onClickCallback={onTabClick}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item md={7}>
        <Paper style={{ width: "100%", height: "100%" }}>
          {activeTab.body}
        </Paper>
      </Grid>
    </Grid>
  );
}
