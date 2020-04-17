import React, { useState, useEffect } from 'react';
import Googlemap from './Googlemap';
import AwaitingTasks from './AwaitingTasks';
import ProgressTasks from './ProgressTasks';
import axios from 'axios';


function Dashboard() {
  const [data, setData] = useState({});
  const awaitingTasks_ = [
    // { 
    //   "title": "Dummy Title1",
    //   "date": "April 4th, 2020",
    //   "lat": "49.24",
    //   "lon": -"123",
    //   "name": "John",
    //   "complete": false
    // },
    // { 
    //   "title": "Dummy Title2",
    //   "date": "April 5th, 2020",
    //   "lat": "49.25",
    //   "lon": -"123.01",
    //   "name": "John",
    //   "complete": false
    // },
    // { 
    //   "title": "Dummy Title3",
    //   "date": "April 6th, 2020",
    //   "lat": "49.26",
    //   "lon": -"123.02",
    //   "name": "John",
    //   "complete": false
    // }
    {
      "stuff": {
          "_id": "5e9941c34bc5b70063f592e0",
          "priority": 10,
          "name": "make_PPE",
          "associatedPosts": [
              null,
              {
                  "location": {
                      "lat": 49.25,
                      "long": -123.03
                  },
                  "_id": "5e99539ca51bc701ecac8fa0",
                  "priority": 10,
                  "name": "newPosting",
                  "description": "description",
                  "poster": "poster",
                  "contact": "new",
                  "date": "2020-04-17T06:39:25.000Z",
                  "completion": true,
                  "__v": 0
              }
          ],
          "__v": 2
      }
  }
  ]

  const progressTasks_ = [
    {
      "stuff": {
          "_id": "1231231231231231",
          "priority": 10,
          "name": "progressTasks_",
          "associatedPosts": [
              null,
              {
                  "location": {
                      "lat": 1,
                      "long": 2
                  },
                  "_id": "87979879879879",
                  "priority": 10,
                  "name": "progressTasks_name",
                  "description": "progressTasks_description",
                  "poster": "progressTasks_poster",
                  "contact": "progressTasks_new",
                  "date": "2020-05-17T06:39:25.000Z",
                  "completion": true,
                  "__v": 0
              }
          ],
          "__v": 2
      }
  }
  ]


  function upDateJson(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      const obj = arr[i].stuff.associatedPosts[1]
      // console.log("obj")
      // console.log(obj)
      result.push(obj)
    }
    // console.log("result[0]");
    // console.log(result[0]);
    return result;
  }

  const awaitingTasks_updated = upDateJson(awaitingTasks_)
  const progressTasks_updated = upDateJson(progressTasks_)


  // useEffect(() => {
  //   axios.get("localhost:8080/postsOfTags?tag=make_PPE")
  //     .then(res => {
  //       console.log(res)
  //     })
  // });

  // useEffect(async () => {
  //   axios.get('http://localhost:8080/postsOfTags?tag=make_PPE')
  //     .then((response) => {
  //       console.log(response.data);
  //       console.log(response.status);
  //       console.log(response.statusText);
  //       console.log(response.headers);
  //       console.log(response.config);
  //     }).catch((err) =>
  //       console.log(err));
  // }, []);

  const [awaitingTasks, setAwaitingTasks] = useState(awaitingTasks_updated);
  const [progressTasks, setProgressTasks] = useState(progressTasks_updated);

  function updateTask(title_) {
    console.log("title: " + title_)
    console.log("Dashboard update");
    const t = awaitingTasks.find(task => task.name === title_);

    const new_awaitingTasks = awaitingTasks.filter(task => task.name !== title_);

    setAwaitingTasks(new_awaitingTasks);
    setProgressTasks(progressTasks.concat(t));

    console.log("new_awaitingTasks: " + new_awaitingTasks);
    console.log("progressTasks: " + progressTasks);
    console.log("data: " + data);
  }

  function deleteTask(title_) {
    console.log("title_ :" + title_)
    const new_progressTasks = progressTasks.filter(task => task.name !== title_);
    setProgressTasks(new_progressTasks);

    console.log("new_progressTasks: " + new_progressTasks);
  }

  console.log("awaitingTasks_updated");
  console.log(awaitingTasks_updated);
  console.log("progressTasks_updated");
  console.log(progressTasks_updated);


  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-8">
          <Googlemap data={awaitingTasks}/>
        </div>
        <div class="col-4">
          <h1>Awaiting Requests</h1>
          <AwaitingTasks data={awaitingTasks} updateTask={updateTask}/>
          <h1>In Progress</h1>
          <ProgressTasks data={progressTasks} deleteTask={deleteTask}/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
