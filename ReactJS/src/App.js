/* eslint-disable jsx-a11y/aria-role */
import React, { useState } from "react";

function App() {
  /**
 * keep this following data as default data in agenda details as it is required for testing*/
 const defaultData=[
      {
        title: "Angular",
        description: "Some description about the angular",
        topics: ["Introduction", "Typescript", "Why Angular?", "Understanding Versions", "Fundamentals"]
      },
      {
        title: "Vue",
        description: "Some description about the vue",
        topics: ["Introduction", "Javascript", "Why Vue?", "Vue Bindings", "Component Interaction"]
      },
    ]

  

  // your data goes here (state)
  const [view,setView] = useState(true);
  const [data,setData] = useState(defaultData);
  const [title,setTitle] =useState("");
  const [description,setDescription] = useState('');
  const [topic,setTopic] = useState('');
  const [topics,setTopics] = useState([]);
  const [invalidTitleView,setInvalidTitleView] = useState(true);
  const [invalidDescription,setInvalidDescription] = useState(true);
  const [invalidTopic,setInvalidTopic] = useState(true);
  const [addTopicBtnDisable,setAddTopicBtnDisable] = useState(false);
  const [submitAgendaBtnDisable,setSubmitAgendaBtnDisable] = useState(false);
  
 
  // your methods goes here
    function changeView(){
      setView(!view);
    }

    function handleTitle(event){
      if(event.target.value.trim()!==''){
        setTitle(event.target.value);
        setInvalidTitleView(false);
      }
      else {
        setInvalidTitleView(true);
      }
    }

    function handleDescription(event){
      if(event.target.value.trim()!==''){
        setDescription(event.target.value);
        setInvalidDescription(false);
      }
      else {
        setInvalidDescription(true);
      }
    }

    function handleTopic(event){
      if(event.target.value.trim()!==''){
        setDescription(event.target.value);
        setInvalidDescription(false);
      }
      else {
        setInvalidDescription(true);
      }
    }

    function handleTopic(event){
      if(event.target.value.trim()!==''){
        setTopic(event.target.value);
        setInvalidTopic(false);
      }
      else {
        setInvalidTopic(true);
      }
    }

    function addTopic(){
      setTopics([...topics,topic]);
      setTopic('');
      setInvalidTopic(true);
      
    }

    function submit(){
      const newData = {
        title : title,
        description : description,
        topics : topics
      }
      setData([...data,newData]);
      setTitle('');
      setDescription('');
      setTopic('');
      setTopics([]);
      setInvalidTitleView(false);
      setInvalidDescription(false);
      setInvalidTopic(false);
    }
  return (
    <div>
      <h1 className="mx-5 mb-5">Agenda Manager</h1>
      {/* show/hide this following add agenda template */}
      {view &&
      <div className="container" role="addAgenda">
        <button className="btn btn-info" role="goToView" onClick={changeView}>
          Click To View Agenda
        </button>
        
        <form>
          <div className="my-3">
            <label className="form-label">Title</label>
            {/* title */}
            <input
              type="text"
              name="newTitle"
              placeholder="Enter the title"
              className="form-control"
              role="inputTitle"
              onChange={handleTitle}
              value={title}
            />
            
            <small className="text-danger" data-testid="invalidTitle">
              {/**
               * show empty string if title input is valid
               * else show 'Title is required'
               */}
               {invalidTitleView ? 'Title is required' : ''}
            </small>
            
          </div>
          <div className="my-3">
            <label className="form-label">Description</label>
            {/* description */}
            <input
              type="text"
              name="newDescription"
              placeholder="Enter the description"
              className="form-control"
              role="inputDescription"
              value={description}
              onChange={handleDescription}
            />
            
            <small className="text-danger" data-testid="invalidDescription">
              {/**
               * show empty string if description input is valid
               * else show 'Title is required'
               */}
               {invalidDescription &&
               'Description is required'
              }
            </small>
            
          </div>
          <div className="my-3 w-50">
            <label className="form-label">Enter topic</label>
            {/* topic */}
            <input
              type="text"
              name="newTopic"
              placeholder="Enter the topic"
              className="form-control"
              role="inputTopic"
              value={topic}
              onChange={handleTopic}
            />

            <small className="text-danger" data-testid="invalidTopic">
              {/**
               * show empty string if topic input is valid
               * else show 'Topic is required'
               */}
               {topics.length==0 && invalidTopic ? 'Topic is required' : ''
               
              }
            </small>
          </div>
          {/* on click should add topics and disable the button if invalid topic */}
          <button className="btn btn-success addAlign" role="addTopicBtn" disabled={invalidTopic}  onClick={addTopic}>
            + Add Topic
          </button>
          {/* on click should add agenda details and disable the button if invalid inputs */}
          <button
            className="btn btn-success submitAlign"
            role="submitAgendaBtn"
            disabled={invalidTitleView || invalidDescription || topics.length==0}
            onClick={submit}
          >
            Submit Agenda
          </button>
        </form>
       
        {/* show if no topics added yet */}
        {topics.length==0 &&
        <div className="text-danger ml-2 mt-5" data-testid="noTopicsMsg">
          No Topics Added
        </div>
        }
        
        {/* display the list of topics added using li */}
        { topics.length>0 &&
        <div className="card my-3">
          <div className="card-header">Added Topics</div>
          <div className="card-body">
            <ul className="list-group">
              {topics.map(topic=>(
              <li className="list-group-item" role="topicList">
                {/* topics list */}
                {topic}
              </li>
              ))}
            </ul>
          </div>
          <div className="card-footer">Refer the topics you added</div>
        </div>
        }
      </div>
       }

      {/* show/hide this following view agenda template */}
      {!view && 
      <div className="container" role="viewAgenda">
        <button className="btn btn-info" role="goToAdd"  onClick={changeView}>
          Click To Add Agenda
        </button>
        {/* iterate the agenda details to display */}
        {data.map(d=>(
          
        
        <div className="card my-3" role="cards">
          <div className="card-header">{/* {title} */}{d.title}</div>
          <div className="card-body">
            <ul className="list-group">
              {/* iterate the topics to display */}
              {d.topics.map(topic=>(

              
              <li className="list-group-item">
                {/* {topic} */}
                {topic}
              </li>
              ))}
            </ul>
          </div>
          <div className="card-footer">{/* {description} */}{d.description}</div>
        </div>
        ))}
      </div>
      }
    </div>
  );
}

export default App;