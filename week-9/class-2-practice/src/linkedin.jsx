import { useEffect, useState } from "react";

function Linkedin() {
  const [currentTab, setCurrentTab] = useState(1);
  const [loading, setLoading] = useState(true);
  const [tabData, setTabData] = useState({});

  useEffect(
    function () {
      setLoading(true);
      fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab).then(
        async (res) => {
          const json = await res.json();
          setTabData(json);
          setLoading(false);
        }
      );
    },
    [currentTab]
  );

  return (
    <>
      <div>Hi there</div>
      <br />
      <button
        onClick={function () {
          setCurrentTab(1);
        }}
        style={{ color: currentTab == 1 ? "red" : "black" }}
      >
        Todo #1
      </button>
      <button
        onClick={function () {
          setCurrentTab(2);
        }}
        style={{ color: currentTab == 2 ? "red" : "black" }}
      >
        Todo #2
      </button>
      <button
        onClick={function () {
          setCurrentTab(3);
        }}
        style={{ color: currentTab == 3 ? "red" : "black" }}
      >
        Todo #3
      </button>
      <button
        onClick={function () {
          setCurrentTab(4);
        }}
        style={{ color: currentTab == 4 ? "red" : "black" }}
      >
        Todo #4
      </button>
      <br />
      {loading ? "loading..." : tabData.title}
    </>
  );
}

export default Linkedin;
