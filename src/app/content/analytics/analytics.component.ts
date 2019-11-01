import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { LogService } from "./log.service";

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  weekday: string;
  steps: string;
  distance: number;
  delta?: number;
}

@Component({
  selector: "app-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.css"],
  providers: [LogService]
})
export class AnalyticsComponent implements OnInit {
  date: any = new Date();
  timestamp = moment(this.date.getTime()).format("MMM Do YYYY, h:mm:ss a");
  selectedItem = "2";
  public single = [
    {
      name: "Monday",
      value: 338
    },
    {
      name: "Tuesday",
      value: 500
    },
    {
      name: "Wednesday",
      value: 420
    },
    {
      name: "Thursday",
      value: 350
    },
    {
      name: "Friday",
      value: 400
    },
    {
      name: "Saturday",
      value: 800
    },
    {
      name: "Sunday",
      value: 888
    }
  ];

  public multi = [
    {
      name: "Current",
      series: [
        {
          name: "2018",
          value: 101101
        },
        {
          name: "2019",
          value: 123000
        }
      ]
    },

    {
      name: "Previous",
      series: [
        {
          name: "2018",
          value: 109500
        },
        {
          name: "2019",
          value: 111111
        }
      ]
    }
  ];

  view: any[] = [320, 200];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = "Number";
  showYAxisLabel = false;
  yAxisLabel = "Value";
  timeline = true;

  colorScheme = {
    domain: ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600"]
  };

  // line, area
  autoScale = true;

  //pie
  showLabels = true;
  explodeSlices = false;
  doughnut = true;

  allColumns = ["weekday", "steps", "distance", "delta"];
  data: TreeNode<FSEntry>[] = [
    {
      data: { weekday: "Monday", steps: "1676", distance: 1.21, delta: 0.0 }
    },
    {
      data: { weekday: "Tuesday", steps: "2000", distance: 1.42, delta: 0.21 }
    },
    {
      data: { weekday: "Wednesday", steps: "1848", distance: 1.35, delta: 0.15 }
    },
    {
      data: { weekday: "Thursday", steps: "1700", distance: 1.22, delta: -0.13 }
    },
    {
      data: { weekday: "Friday", steps: "1800", distance: 1.33, delta: 0.11 }
    },
    {
      data: { weekday: "Saturday", steps: "2600", distance: 1.95, delta: 0.62 }
    },
    {
      data: { weekday: "Sunday", steps: "3330", distance: 2.2, delta: 0.25 }
    }
  ];

  firstCard = {
    logs: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1
  };
  pageSize = 10;
  constructor(private logService: LogService) {}

  loadNext(cardData) {
    if (cardData.loading) {
      return;
    }

    cardData.loading = true;
    cardData.placeholders = new Array(this.pageSize);
    this.logService
      .load(cardData.pageToLoadNext, this.pageSize)
      .subscribe(nextLogs => {
        cardData.placeholders = [];
        cardData.logs.push(...nextLogs);
        cardData.loading = false;
        cardData.pageToLoadNext++;
      });
  }

  ngOnInit() {}
}
