    import Task from "../variables/Task";
   // import {Statuses} from "../variables/Statuses";

   export const imgBox: string[] = ['Tulips.jpg','Tulips.jpg','Tulips.jpg','Map5.jpg'];

    export const dataActivity: object[] = [
        {
          name: "Darika Samak ",
          description:
            "mark as done Listing on Product Hunt so that we can reach as many potential users",
          time: "8:40 PM",
          extraDescription: "",
          lable: "done"
        },
        {
          name: "Emilee Simchenko ",
          description:
            "commented on Account for teams and personal in bottom style",
          time: "7:32 PM",
          extraDescription:
            "During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes",
            lable: "comment"
        },
        {
          name: "Darika Samak ",
          description:
            "uploaded 4 files on An option to search in current projects or in all projects",
          time: "6:02 PM",
          extraDescription: "",
          lable: "upload"
        }
      ]


      export const dataTasks: Task[] = [
        {
            id: 1,
            name: "Learn scss",
            description: "Internet resources should be used",
            time: "2019-11-27",
            status: "done",
            created:"1579989600000"
          },
          {
            id: 2,
            name: "To do homework",
            description:
              "To use the following mechanisms: variables, nesting, mixins, and selector inheritance",
            time: "2020-02-28",
           status: "todo",
           created: "1580767200000"
          },
          {
            id: 3,
            name: "Upload Homework to github",
            description: "Inform this mentor",
            time: "2019-11-30",
           status: "todo",
           created: "1580940000000"
          }
      ]
