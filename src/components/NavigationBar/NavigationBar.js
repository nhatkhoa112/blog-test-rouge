import React from 'react'
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap'

export const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          {' '}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="3" viewBox="0 0 44 1">
            <line
              id="Line_6"
              data-name="Line 6"
              x1="44"
              transform="translate(0 0.5)"
              fill="none"
              stroke="#707070"
              strokeWidth="1"
            />
          </svg>
          <svg id="icon1" xmlns="http://www.w3.org/2000/svg" width="100" height="41.223" viewBox="0 0 156.433 41.223">
            <path
              id="Path_6"
              data-name="Path 6"
              d="M2.148-39.719H.483q-.3-.188-.3-.322,0-.161.3-.349H9.426a.311.311,0,0,1,.228.094.311.311,0,0,1,.094.228.345.345,0,0,1-.094.255.311.311,0,0,1-.228.094H7.654V-.7H8.786a3.46,3.46,0,0,0,2.129-.685,6.678,6.678,0,0,0,1.779-2.833,31.586,31.586,0,0,0,1.846-6.915q.579-3.746.606-4.794a1.089,1.089,0,0,1,.1-.483l.206-.081.206.081a.341.341,0,0,1,.1.242L15.549,0H.457A.318.318,0,0,1,.228-.09.324.324,0,0,1,.134-.336a.322.322,0,0,1,.1-.245.324.324,0,0,1,.231-.09H2.148Zm16.731,0H17.268a.269.269,0,0,1-.215-.094.339.339,0,0,1-.081-.228.379.379,0,0,1,.081-.255.269.269,0,0,1,.215-.094H26a.311.311,0,0,1,.228.094.311.311,0,0,1,.094.228.345.345,0,0,1-.094.255.311.311,0,0,1-.228.094H24.385V-.671H26q.269.181.269.336,0,.181-.269.336H17.053q-.3-.181-.3-.336t.3-.336h1.826Zm10.823,0H28.037q-.3-.188-.3-.322,0-.188.3-.349H42.861v14.932a.3.3,0,0,1-.077.215.272.272,0,0,1-.206.081.267.267,0,0,1-.232-.107,2.422,2.422,0,0,1-.1-.831,33.4,33.4,0,0,0-1.132-7.117,19.808,19.808,0,0,0-1.887-5.16,2.742,2.742,0,0,0-1.105-1.005,4.877,4.877,0,0,0-2-.308h-.916v18.879a2.862,2.862,0,0,0,2.165-1.531q1.353-2.175,1.353-6.741v-1.477a.32.32,0,0,1,.084-.242.311.311,0,0,1,.225-.081.287.287,0,0,1,.225.094.33.33,0,0,1,.084.228V-10.42a.32.32,0,0,1-.084.242.311.311,0,0,1-.225.081l-.2-.081a.327.327,0,0,1-.112-.242v-2.39A10.938,10.938,0,0,0,37.4-18.745a2.7,2.7,0,0,0-2.192-1.37V-.671h1.715a.279.279,0,0,1,.218.09.352.352,0,0,1,.082.245.355.355,0,0,1-.081.245.275.275,0,0,1-.215.09H28.038a.411.411,0,0,1-.3-.1.315.315,0,0,1-.108-.232.3.3,0,0,1,.107-.245.445.445,0,0,1,.3-.09H29.7Zm16.57,0H44.53q-.272-.188-.272-.322,0-.188.269-.349h15.28v14.958q-.154.269-.309.269a.246.246,0,0,1-.219-.094,2.428,2.428,0,0,1-.09-.764,31.834,31.834,0,0,0-1.4-8.283q-1.213-3.833-2.345-4.852a2.956,2.956,0,0,0-1.995-.536H51.777v18.879a3.35,3.35,0,0,0,2.5-1.611q1.289-1.96,1.289-6.016v-2.095a.311.311,0,0,1,.094-.228.311.311,0,0,1,.228-.094.269.269,0,0,1,.215.094.339.339,0,0,1,.081.228v19.954a.339.339,0,0,1-.081.228.269.269,0,0,1-.215.094.311.311,0,0,1-.228-.094.311.311,0,0,1-.094-.228v-1.934a11.89,11.89,0,0,0-1.45-6.311q-.859-1.343-1.8-1.343a.462.462,0,0,0-.376.161.9.9,0,0,0-.161.591V-.7h.859a3.568,3.568,0,0,0,2.175-.819,7.505,7.505,0,0,0,2.014-2.847,20.789,20.789,0,0,0,1.45-4.418,30.731,30.731,0,0,0,.833-6.042V-16.6q.188-.3.349-.3a.379.379,0,0,1,.255.081.269.269,0,0,1,.094.215V0H44.553a.409.409,0,0,1-.3-.1.315.315,0,0,1-.107-.232.3.3,0,0,1,.107-.245.445.445,0,0,1,.3-.09h1.719ZM70.979-.671V-39.719H69.207q-.3-.188-.3-.349,0-.134.295-.322h8.139q.295.188.295.322,0,.161-.3.349h-.859V-21.35h3.438V-39.719H78.794q-.3-.188-.3-.349t.3-.322h8.3q.3.188.3.322,0,.161-.3.349H85.481V-.671h1.611a.366.366,0,0,1,.242.09.3.3,0,0,1,.107.245.3.3,0,0,1-.108.245.368.368,0,0,1-.243.09H79.036a.318.318,0,0,1-.229-.09.324.324,0,0,1-.094-.245.321.321,0,0,1,.1-.245.328.328,0,0,1,.233-.09h.879V-20.706H76.484V-.671h1.047a.317.317,0,0,1,.228.09.324.324,0,0,1,.094.245.325.325,0,0,1-.094.245.316.316,0,0,1-.228.09H69.206q-.295-.181-.295-.336t.3-.336ZM95.267-39.827h2.962L103.018-.671h1.208q.3.181.3.336t-.3.336H96.143a.274.274,0,0,1-.215-.09.355.355,0,0,1-.081-.245.355.355,0,0,1,.081-.245.274.274,0,0,1,.215-.09h1.289l-.7-7.654H91.8L91.244-4q-.027.349-.027.726a2.994,2.994,0,0,0,.445,1.787,1.852,1.852,0,0,0,1.228.739l.432.134a.364.364,0,0,1,.108.269.345.345,0,0,1-.094.255A.311.311,0,0,1,93.108,0H88.516a.311.311,0,0,1-.228-.094.345.345,0,0,1-.094-.255.435.435,0,0,1,.081-.269L88.6-.725a1.715,1.715,0,0,0,1.208-.7,7.327,7.327,0,0,0,.913-3.115Zm-.7,10.017L91.891-9.023h4.721ZM119.4-40.686v15.925a.447.447,0,0,1-.107.309.344.344,0,0,1-.269.121.364.364,0,0,1-.269-.107.5.5,0,0,1-.107-.322v-1.423a30.438,30.438,0,0,0-.779-6.794q-.994-4.458-2.739-6.338a2.269,2.269,0,0,0-1.746-.725,1.377,1.377,0,0,0-1.155.564,3.384,3.384,0,0,0-.564,2.147V-2.872a2.837,2.837,0,0,0,.5,1.865,1.666,1.666,0,0,0,1.329.577,3.458,3.458,0,0,0,2.2-.952,5.947,5.947,0,0,0,1.719-2.561,20.583,20.583,0,0,0,1.235-7.319v-4.424a.635.635,0,0,1,.107-.4.331.331,0,0,1,.269-.134.255.255,0,0,1,.215.107.642.642,0,0,1,.161.43v4.431q0,6.257-2.31,9.4A4.933,4.933,0,0,1,112.954.4a4.809,4.809,0,0,1-3.223-1.168A8.361,8.361,0,0,1,107.5-4.753a44.859,44.859,0,0,1-1.584-12.756v-4.619a53.936,53.936,0,0,1,.927-10.192q.927-4.821,3.021-7.023a4.372,4.372,0,0,1,3.223-1.477q2.148,0,3.867,2.954l2.148-2.82Zm3.545.967h-1.611a.353.353,0,0,1-.255-.09.324.324,0,0,1-.094-.245.325.325,0,0,1,.094-.245.351.351,0,0,1,.255-.09h8.81q.268.181.268.336t-.269.336H128.45v19.6l6.148-14.9a6.361,6.361,0,0,0,.566-2.444,2.625,2.625,0,0,0-.351-1.45,1.722,1.722,0,0,0-1-.725l-1.021-.081a.348.348,0,0,1-.188-.322.345.345,0,0,1,.094-.255.311.311,0,0,1,.228-.094h6.609a.311.311,0,0,1,.228.094.345.345,0,0,1,.094.255.3.3,0,0,1-.161.3l-1.289.134a3.1,3.1,0,0,0-1.625,1.315,26.839,26.839,0,0,0-1.95,4.132l-2.755,6.674,7.055,26.82h1.208a.317.317,0,0,1,.228.09.324.324,0,0,1,.094.245.324.324,0,0,1-.094.245.318.318,0,0,1-.229.09h-8.565q-.243-.181-.243-.336,0-.181.245-.336h1.769L128.45-19.4V-.671h1.67a.345.345,0,0,1,.252.09.327.327,0,0,1,.093.245.326.326,0,0,1-.093.245.349.349,0,0,1-.254.09h-8.785l-.107-.052a.452.452,0,0,1-.08-.284.438.438,0,0,1,.188-.336h1.611ZM145.476-2.336a14.477,14.477,0,0,0-1.866,1.6q-.953.953-1.168.953a.158.158,0,0,1-.134-.081.727.727,0,0,1-.054-.349V-17.08a.231.231,0,0,1,.07-.175.218.218,0,0,1,.154-.067.312.312,0,0,1,.252.161.832.832,0,0,1,.2.537v1.155a32.83,32.83,0,0,0,1.044,7.654A14,14,0,0,0,146.7-1.692a2.535,2.535,0,0,0,1.928.913,2.739,2.739,0,0,0,2.2-1.2,5.8,5.8,0,0,0,.937-3.612,15.468,15.468,0,0,0-.859-4.888,89.292,89.292,0,0,0-5-11.011,50.8,50.8,0,0,1-3.075-6.835,13.714,13.714,0,0,1-.658-4.1,9.351,9.351,0,0,1,1.863-6.177,5.452,5.452,0,0,1,4.248-2.229,4.614,4.614,0,0,1,3.672,2.175,15.049,15.049,0,0,0,2.6-1.8q.428-.376.563-.376a.153.153,0,0,1,.107.054.922.922,0,0,1,.054.376v14.583a.814.814,0,0,1-.134.483.254.254,0,0,1-.214.107.263.263,0,0,1-.241-.134,13.751,13.751,0,0,1-.321-1.934q-1.1-8.352-2.918-11.064a3,3,0,0,0-2.436-1.558,2.231,2.231,0,0,0-1.767.913,4.149,4.149,0,0,0-.75,2.686q0,3.2,3.652,10.5l2.363,4.753a47.772,47.772,0,0,1,3.25,7.8,19.466,19.466,0,0,1,.806,5.17,9.184,9.184,0,0,1-1.96,6.23A5.923,5.923,0,0,1,150.015.4,5.137,5.137,0,0,1,145.476-2.336Z"
              transform="translate(-0.134 40.82)"
              fill="#29424e"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="3" viewBox="0 0 44 1">
            <line
              id="Line_7"
              data-name="Line 6"
              x1="44"
              transform="translate(0 0.5)"
              fill="none"
              stroke="#707070"
              strokeWidth="1"
            />
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Enter key word"
              className="mr-2 border-radius-left"
              aria-label="Search"
            />
            <Button className="border-radius-right" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}