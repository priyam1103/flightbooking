import React from 'react'
import type { FunctionComponent } from 'react'
type Props = {
  timing: string;
  iconname: string;
  border_val:Boolean
}
const FilterIcons: FunctionComponent<Props>= ({ timing, iconname,border_val })=> {
  if (iconname == "sun") {
    return (
      <div className={`filtericon ${border_val && 'icon-border'}`}>
        <svg className="svgfilter" xmlns="http://www.w3.org/2000/svg" width="60" height="35.437" viewBox="0 0 33 25.437"><g id="sunrise" transform="translate(0 -58.672)"><g id="Group_57" data-name="Group 57" transform="translate(0 65.533)"><g id="Group_56" data-name="Group 56"><path id="Path_104" data-name="Path 104" d="M32.313,175.443H24.5a8.264,8.264,0,1,0-16.008,0H.687a.688.688,0,0,0,0,1.376H32.313a.688.688,0,0,0,0-1.376Zm-9.237,0H9.924a6.889,6.889,0,1,1,13.152,0Z" transform="translate(0 -165.117)" fill="#949db2"></path></g></g><g id="Group_59" data-name="Group 59" transform="translate(1.375 73.109)"><g id="Group_58" data-name="Group 58"><path id="Path_105" data-name="Path 105" d="M26.148,282.672H22.023a.688.688,0,0,0,0,1.376h4.125a.688.688,0,0,0,0-1.376Z" transform="translate(-21.336 -282.672)" fill="#949db2"></path></g></g><g id="Group_61" data-name="Group 61" transform="translate(26.126 73.109)"><g id="Group_60" data-name="Group 60"><path id="Path_106" data-name="Path 106" d="M410.156,282.672h-4.125a.688.688,0,0,0,0,1.376h4.125a.687.687,0,0,0,0-1.375Z" transform="translate(-405.344 -282.672)" fill="#949db2"></path></g></g><g id="Group_63" data-name="Group 63" transform="translate(23.105 62.9)"><g id="Group_62" data-name="Group 62"><path id="Path_107" data-name="Path 107" d="M362.567,124.479a.687.687,0,0,0-.973,0h0l-2.915,2.915a.688.688,0,1,0,.973.972h0l2.917-2.917A.688.688,0,0,0,362.567,124.479Z" transform="translate(-358.477 -124.277)" fill="#949db2"></path></g></g><g id="Group_65" data-name="Group 65" transform="translate(15.813 58.672)"><g id="Group_64" data-name="Group 64"><path id="Path_108" data-name="Path 108" d="M246.023,58.672a.687.687,0,0,0-.687.687v4.125a.687.687,0,0,0,1.375,0V59.359A.687.687,0,0,0,246.023,58.672Z" transform="translate(-245.336 -58.672)" fill="#949db2"></path></g></g><g id="Group_67" data-name="Group 67" transform="translate(5.603 62.9)"><g id="Group_66" data-name="Group 66"><path id="Path_109" data-name="Path 109" d="M91.03,127.4h0l-2.917-2.916a.688.688,0,0,0-.972.972h0l2.915,2.915a.688.688,0,1,0,.972-.972Z" transform="translate(-86.939 -124.277)" fill="#949db2"></path></g></g><g id="Group_69" data-name="Group 69" transform="translate(14.354 78.609)"><g id="Group_68" data-name="Group 68"><path id="Path_110" data-name="Path 110" d="M226.8,369.66h0l-1.457-1.457h0a.687.687,0,0,0-.972,0l-1.459,1.458a.687.687,0,0,0,.972.972h0l.284-.284v2.465a.687.687,0,0,0,1.375,0v-2.465l.285.284a.687.687,0,0,0,.972-.972Z" transform="translate(-222.705 -368)" fill="#949db2"></path></g></g></g></svg>
        <p className="text">{timing}</p>
      
      </div>
    )

  }
  else if (iconname == "cloudsun") {
    return (
      <div className={`filtericon ${border_val && 'icon-border'}`}>
        
      <svg xmlns="http://www.w3.org/2000/svg"  className="svgfilter"  width="60" height="35.437" viewBox="0 0 29.328 25.834"><g id="sunset" transform="translate(0 -30.5)"><path id="Path_111" data-name="Path 111" d="M241.859,35.713a.859.859,0,0,0,.859-.859V31.359a.859.859,0,1,0-1.718,0v3.494A.859.859,0,0,0,241.859,35.713Z" transform="translate(-227.195)" fill="#949db2"></path><path id="Path_112" data-name="Path 112" d="M161.356,80.258a.859.859,0,1,0,1.588-.658l-.658-1.588a.859.859,0,0,0-1.588.658Z" transform="translate(-151.431 -44.291)" fill="#949db2"></path><path id="Path_113" data-name="Path 113" d="M310.409,80.723a.858.858,0,0,0,1.123-.465l.658-1.588a.859.859,0,0,0-1.588-.658l-.658,1.588A.859.859,0,0,0,310.409,80.723Z" transform="translate(-292.128 -44.291)" fill="#949db2"></path><path id="Path_114" data-name="Path 114" d="M.859,273.218H4.353a.859.859,0,0,0,0-1.718H.859a.859.859,0,0,0,0,1.718Z" transform="translate(0 -227.195)" fill="#949db2"></path><path id="Path_115" data-name="Path 115" d="M421,272.359a.859.859,0,0,0,.859.859h3.494a.859.859,0,0,0,0-1.718h-3.494A.859.859,0,0,0,421,272.359Z" transform="translate(-396.885 -227.195)" fill="#949db2"></path><path id="Path_116" data-name="Path 116" d="M73.975,105.691a.859.859,0,1,0,1.215-1.215l-2.43-2.43a.859.859,0,0,0-1.215,1.215Z" transform="translate(-67.21 -67.211)" fill="#949db2"></path><path id="Path_117" data-name="Path 117" d="M369.138,105.943a.856.856,0,0,0,.608-.252l2.43-2.43a.859.859,0,0,0-1.215-1.215l-2.43,2.43a.859.859,0,0,0,.608,1.467Z" transform="translate(-347.183 -67.211)" fill="#949db2"></path><path id="Path_118" data-name="Path 118" d="M407.36,192.979a.858.858,0,0,0,1.123.465l1.588-.658a.859.859,0,1,0-.658-1.588l-1.588.658A.859.859,0,0,0,407.36,192.979Z" transform="translate(-383.965 -151.432)" fill="#949db2"></path><path id="Path_119" data-name="Path 119" d="M47.511,192.786l1.588.658a.859.859,0,0,0,.658-1.588l-1.588-.658a.859.859,0,1,0-.658,1.588Z" transform="translate(-44.29 -151.431)" fill="#949db2"></path><path id="Path_120" data-name="Path 120" d="M28.469,161.811H21.955a7.733,7.733,0,1,0-14.582,0H.859a.859.859,0,1,0,0,1.718H28.469a.859.859,0,1,0,0-1.718ZM8.649,159.233A6.015,6.015,0,1,1,20.1,161.811H9.229A6.02,6.02,0,0,1,8.649,159.233Z" transform="translate(0 -114.069)" fill="#949db2"></path><path id="Path_121" data-name="Path 121" d="M81.595,391.5H60.859a.859.859,0,0,0,0,1.718H81.595a.859.859,0,0,0,0-1.718Z" transform="translate(-56.563 -340.322)" fill="#949db2"></path><path id="Path_122" data-name="Path 122" d="M134.721,451.5H120.859a.859.859,0,1,0,0,1.718h13.862a.859.859,0,1,0,0-1.718Z" transform="translate(-113.126 -396.885)" fill="#949db2"></path></g></svg>
      <p className="text">{timing}</p>
        
    </div>
    )
  }
  else if (iconname == "moon") {
    return (
      <div className={`filtericon ${border_val && 'icon-border'}`}>
       <svg xmlns="http://www.w3.org/2000/svg" className="svgfilter"  width="60" height="35.437"viewBox="0 0 24.108 22.579"><g id="moon" transform="translate(0 -12.158)"><g id="Group_49" data-name="Group 49" transform="translate(10.295 15.709)"><g id="Group_48" data-name="Group 48"><path id="Path_87" data-name="Path 87" d="M167.577,72.057a.559.559,0,0,0-.388-.121h-2.114l1.988-2.22.186-.206.1-.121a.669.669,0,0,0,.081-.151.5.5,0,0,0,.035-.181.378.378,0,0,0-.186-.362,1.122,1.122,0,0,0-.528-.1h-2.471a.544.544,0,0,0-.367.111.372.372,0,0,0-.131.3q0,.257.171.312a1.616,1.616,0,0,0,.5.06h1.611q-.1.141-.262.332l-.413.463-.559.6-.649.72q-.337.377-.443.5a.473.473,0,0,0,.045.649.685.685,0,0,0,.463.136h2.939a.574.574,0,0,0,.393-.116.383.383,0,0,0,.131-.3A.4.4,0,0,0,167.577,72.057Z" transform="translate(-163.629 -68.592)" fill="#949db2"></path></g></g><g id="Group_51" data-name="Group 51" transform="translate(15.573 18.955)"><g id="Group_50" data-name="Group 50"><path id="Path_88" data-name="Path 88" d="M250.641,122.987a.443.443,0,0,0-.312-.1h-1.691l1.585-1.772.151-.166.1-.116a.528.528,0,0,0,.065-.121.4.4,0,0,0,.03-.146.3.3,0,0,0-.146-.292A.9.9,0,0,0,250,120.2H248a.438.438,0,0,0-.292.091.3.3,0,0,0-.106.237q0,.2.136.252a1.285,1.285,0,0,0,.4.045h1.289a2.986,2.986,0,0,1-.211.267l-.332.372-.433.5-.5.574q-.272.3-.357.413a.377.377,0,0,0,.035.5.543.543,0,0,0,.367.106h2.335a.458.458,0,0,0,.312-.091.307.307,0,0,0,.1-.237A.322.322,0,0,0,250.641,122.987Z" transform="translate(-247.516 -120.197)" fill="#949db2"></path></g></g><g id="Group_53" data-name="Group 53" transform="translate(20.024 15.427)"><g id="Group_52" data-name="Group 52"><path id="Path_89" data-name="Path 89" d="M322.222,67.6a.559.559,0,0,0-.388-.121h-2.129l1.988-2.22.186-.206.121-.146a.668.668,0,0,0,.081-.151.5.5,0,0,0,.035-.181.378.378,0,0,0-.186-.362,1.123,1.123,0,0,0-.528-.1h-2.5a.544.544,0,0,0-.367.111.372.372,0,0,0-.131.3q0,.257.171.312a1.615,1.615,0,0,0,.5.06h1.611q-.1.141-.262.332l-.418.473-.544.6-.649.72q-.337.377-.443.5a.473.473,0,0,0,.045.649.685.685,0,0,0,.463.136h2.934a.574.574,0,0,0,.4-.1.383.383,0,0,0,.131-.3A.4.4,0,0,0,322.222,67.6Z" transform="translate(-318.269 -64.112)" fill="#949db2"></path></g></g><g id="Group_55" data-name="Group 55" transform="translate(0 12.158)"><g id="Group_54" data-name="Group 54" transform="translate(0 0)"><path id="Path_90" data-name="Path 90" d="M22.241,27.392a.5.5,0,0,0-.554-.116,10.691,10.691,0,0,1-13.776-14.4.5.5,0,0,0-.649-.679,11.707,11.707,0,1,0,15.07,15.754A.5.5,0,0,0,22.241,27.392ZM11.716,33.734A10.706,10.706,0,0,1,6.507,13.677a11.54,11.54,0,0,0-.6,3.7A11.712,11.712,0,0,0,20.821,28.641,10.746,10.746,0,0,1,11.716,33.734Z" transform="translate(0 -12.158)" fill="#949db2"></path></g></g></g></svg>      
              <p className="text">{timing}</p>
     
    </div>
    )
  }
  else if (iconname == "nonstop") {
    return (
      <div className={`filtericon ${border_val && 'icon-border'}`}>
            <svg xmlns="http://www.w3.org/2000/svg"  className="svgfilter"  width="60" height="45.437" viewBox="0 0 83.334 40.702" ><g id="Group_358" data-name="Group 358" transform="translate(-29.333 -163.828)" className="jsx-2314635978"><g id="noun_Flight_343140" transform="translate(23.333 179.288)" className="jsx-2314635978"><g id="Group_19" data-name="Group 19" transform="translate(6 12)" className="jsx-2314635978"><path id="Path_51" data-name="Path 51" d="M10.7,964.71a.345.345,0,0,0,.016.1l1.443,4.971-3.539.147-.762-1.22a.355.355,0,0,0-.294-.163H6.348a.365.365,0,0,0-.348.348.352.352,0,0,0,.011.087l.5,2-.5,2a.351.351,0,0,0-.011.087.365.365,0,0,0,.348.349h1.22a.354.354,0,0,0,.294-.164l.762-1.22,3.539.147-1.443,4.971a.365.365,0,0,0,.332.447h1.568a.354.354,0,0,0,.294-.163l3.2-5.053,3.283.163h.016a2.155,2.155,0,0,0,1.247-.43,1.3,1.3,0,0,0,0-2.276,2.156,2.156,0,0,0-1.247-.43H19.4l-3.283.163-3.2-5.053a.356.356,0,0,0-.294-.163H11.053A.378.378,0,0,0,10.7,964.71Zm.811.349h.915l3.207,5.064a.356.356,0,0,0,.31.163l3.469-.174h.016a1.584,1.584,0,0,1,.822.3.619.619,0,0,1,0,1.143,1.586,1.586,0,0,1-.822.3h-.016l-3.469-.174a.356.356,0,0,0-.31.163l-3.207,5.064h-.915l1.438-4.955a.365.365,0,0,0-.316-.447l-4.182-.174a.356.356,0,0,0-.31.163l-.768,1.231H6.795l.414-1.655a.35.35,0,0,0,0-.174l-.414-1.655h.583l.768,1.231a.356.356,0,0,0,.31.163l4.182-.174a.365.365,0,0,0,.316-.447Z" transform="translate(-6 -964.362)" fill="#bbb" className="jsx-2314635978"></path></g></g><g id="noun_Flight_343140-2" data-name="noun_Flight_343140" transform="translate(91.333 179.288)" className="jsx-2314635978"><g id="Group_19-2" data-name="Group 19" transform="translate(6 12)" className="jsx-2314635978"><path id="Path_51-2" data-name="Path 51" d="M10.7,964.71a.345.345,0,0,0,.016.1l1.443,4.971-3.539.147-.762-1.22a.355.355,0,0,0-.294-.163H6.348a.365.365,0,0,0-.348.348.352.352,0,0,0,.011.087l.5,2-.5,2a.351.351,0,0,0-.011.087.365.365,0,0,0,.348.349h1.22a.354.354,0,0,0,.294-.164l.762-1.22,3.539.147-1.443,4.971a.365.365,0,0,0,.332.447h1.568a.354.354,0,0,0,.294-.163l3.2-5.053,3.283.163h.016a2.155,2.155,0,0,0,1.247-.43,1.3,1.3,0,0,0,0-2.276,2.156,2.156,0,0,0-1.247-.43H19.4l-3.283.163-3.2-5.053a.356.356,0,0,0-.294-.163H11.053A.378.378,0,0,0,10.7,964.71Zm.811.349h.915l3.207,5.064a.356.356,0,0,0,.31.163l3.469-.174h.016a1.584,1.584,0,0,1,.822.3.619.619,0,0,1,0,1.143,1.586,1.586,0,0,1-.822.3h-.016l-3.469-.174a.356.356,0,0,0-.31.163l-3.207,5.064h-.915l1.438-4.955a.365.365,0,0,0-.316-.447l-4.182-.174a.356.356,0,0,0-.31.163l-.768,1.231H6.795l.414-1.655a.35.35,0,0,0,0-.174l-.414-1.655h.583l.768,1.231a.356.356,0,0,0,.31.163l4.182-.174a.365.365,0,0,0,.316-.447Z" transform="translate(-6 -964.362)" fill="#bbb" className="jsx-2314635978"></path></g></g><path id="Path_68" data-name="Path 68" d="M2263.333,1068.333s1.667-20.627,30-21,32.333,21,32.333,21" transform="translate(-2224 -883)" fill="none" stroke="#bbb" stroke-width="1" className="jsx-2314635978"></path><circle id="Ellipse_14" data-name="Ellipse 14" cx="2.5" cy="2.5" r="2.5" transform="translate(37 183)" fill="#949db2" className="jsx-2314635978"></circle><circle id="Ellipse_15" data-name="Ellipse 15" cx="2.5" cy="2.5" r="2.5" transform="translate(99 183)" fill="#949db2" className="jsx-2314635978"></circle></g></svg>

              <p className="text">{timing}</p>
      
    </div>
    )
  }
  else if (iconname == "onestop") {
    return (
      <div className={`filtericon ${border_val && 'icon-border'}`}>
            <svg xmlns="http://www.w3.org/2000/svg"  className="svgfilter"  width="60" height="45.437" viewBox="0 0 83.334 42.531" ><g id="Group_359" data-name="Group 359" transform="translate(-146.333 -162)" className="jsx-2314635978"><g id="noun_Flight_343140" transform="translate(140.333 179.288)" className="jsx-2314635978"><g id="Group_19" data-name="Group 19" transform="translate(6 12)" className="jsx-2314635978"><path id="Path_51" data-name="Path 51" d="M10.7,964.71a.345.345,0,0,0,.016.1l1.443,4.971-3.539.147-.762-1.22a.355.355,0,0,0-.294-.163H6.348a.365.365,0,0,0-.348.348.352.352,0,0,0,.011.087l.5,2-.5,2a.351.351,0,0,0-.011.087.365.365,0,0,0,.348.349h1.22a.354.354,0,0,0,.294-.164l.762-1.22,3.539.147-1.443,4.971a.365.365,0,0,0,.332.447h1.568a.354.354,0,0,0,.294-.163l3.2-5.053,3.283.163h.016a2.155,2.155,0,0,0,1.247-.43,1.3,1.3,0,0,0,0-2.276,2.156,2.156,0,0,0-1.247-.43H19.4l-3.283.163-3.2-5.053a.356.356,0,0,0-.294-.163H11.053A.378.378,0,0,0,10.7,964.71Zm.811.349h.915l3.207,5.064a.356.356,0,0,0,.31.163l3.469-.174h.016a1.584,1.584,0,0,1,.822.3.619.619,0,0,1,0,1.143,1.586,1.586,0,0,1-.822.3h-.016l-3.469-.174a.356.356,0,0,0-.31.163l-3.207,5.064h-.915l1.438-4.955a.365.365,0,0,0-.316-.447l-4.182-.174a.356.356,0,0,0-.31.163l-.768,1.231H6.795l.414-1.655a.35.35,0,0,0,0-.174l-.414-1.655h.583l.768,1.231a.356.356,0,0,0,.31.163l4.182-.174a.365.365,0,0,0,.316-.447Z" transform="translate(-6 -964.362)" fill="#bbb" className="jsx-2314635978"></path></g></g><g id="noun_Flight_343140-2" data-name="noun_Flight_343140" transform="translate(208.333 179.288)" className="jsx-2314635978"><g id="Group_19-2" data-name="Group 19" transform="translate(6 12)" className="jsx-2314635978"><path id="Path_51-2" data-name="Path 51" d="M10.7,964.71a.345.345,0,0,0,.016.1l1.443,4.971-3.539.147-.762-1.22a.355.355,0,0,0-.294-.163H6.348a.365.365,0,0,0-.348.348.352.352,0,0,0,.011.087l.5,2-.5,2a.351.351,0,0,0-.011.087.365.365,0,0,0,.348.349h1.22a.354.354,0,0,0,.294-.164l.762-1.22,3.539.147-1.443,4.971a.365.365,0,0,0,.332.447h1.568a.354.354,0,0,0,.294-.163l3.2-5.053,3.283.163h.016a2.155,2.155,0,0,0,1.247-.43,1.3,1.3,0,0,0,0-2.276,2.156,2.156,0,0,0-1.247-.43H19.4l-3.283.163-3.2-5.053a.356.356,0,0,0-.294-.163H11.053A.378.378,0,0,0,10.7,964.71Zm.811.349h.915l3.207,5.064a.356.356,0,0,0,.31.163l3.469-.174h.016a1.584,1.584,0,0,1,.822.3.619.619,0,0,1,0,1.143,1.586,1.586,0,0,1-.822.3h-.016l-3.469-.174a.356.356,0,0,0-.31.163l-3.207,5.064h-.915l1.438-4.955a.365.365,0,0,0-.316-.447l-4.182-.174a.356.356,0,0,0-.31.163l-.768,1.231H6.795l.414-1.655a.35.35,0,0,0,0-.174l-.414-1.655h.583l.768,1.231a.356.356,0,0,0,.31.163l4.182-.174a.365.365,0,0,0,.316-.447Z" transform="translate(-6 -964.362)" fill="#bbb" className="jsx-2314635978"></path></g></g><path id="Path_69" data-name="Path 69" d="M2263.333,1068.333s1.667-20.627,30-21,32.333,21,32.333,21" transform="translate(-2107 -883)" fill="none" stroke="#bbb" stroke-width="1" className="jsx-2314635978"></path><circle id="Ellipse_16" data-name="Ellipse 16" cx="2.5" cy="2.5" r="2.5" transform="translate(154 183)" fill="#949db2" className="jsx-2314635978"></circle><circle id="Ellipse_17" data-name="Ellipse 17" cx="2.5" cy="2.5" r="2.5" transform="translate(216 183)" fill="#949db2" className="jsx-2314635978"></circle><circle id="Ellipse_18" data-name="Ellipse 18" cx="2.5" cy="2.5" r="2.5" transform="translate(185 162)" fill="#949db2" className="jsx-2314635978"></circle></g></svg>

              <p className="text">{timing}</p>
       
    </div>
    )
  }
  else if (iconname == "morestop") {
    return (
      <div className={`filtericon ${border_val && 'icon-border'}`}>
           <svg xmlns="http://www.w3.org/2000/svg"   className="svgfilter"  width="60" height="45.437" viewBox="0 0 83.334 40.702"><g id="Group_360" data-name="Group 360" transform="translate(-263.333 -163.828)" className="jsx-2314635978"><g id="noun_Flight_343140" transform="translate(257.333 179.288)" className="jsx-2314635978"><g id="Group_19" data-name="Group 19" transform="translate(6 12)" className="jsx-2314635978"><path id="Path_51" data-name="Path 51" d="M10.7,964.71a.345.345,0,0,0,.016.1l1.443,4.971-3.539.147-.762-1.22a.355.355,0,0,0-.294-.163H6.348a.365.365,0,0,0-.348.348.352.352,0,0,0,.011.087l.5,2-.5,2a.351.351,0,0,0-.011.087.365.365,0,0,0,.348.349h1.22a.354.354,0,0,0,.294-.164l.762-1.22,3.539.147-1.443,4.971a.365.365,0,0,0,.332.447h1.568a.354.354,0,0,0,.294-.163l3.2-5.053,3.283.163h.016a2.155,2.155,0,0,0,1.247-.43,1.3,1.3,0,0,0,0-2.276,2.156,2.156,0,0,0-1.247-.43H19.4l-3.283.163-3.2-5.053a.356.356,0,0,0-.294-.163H11.053A.378.378,0,0,0,10.7,964.71Zm.811.349h.915l3.207,5.064a.356.356,0,0,0,.31.163l3.469-.174h.016a1.584,1.584,0,0,1,.822.3.619.619,0,0,1,0,1.143,1.586,1.586,0,0,1-.822.3h-.016l-3.469-.174a.356.356,0,0,0-.31.163l-3.207,5.064h-.915l1.438-4.955a.365.365,0,0,0-.316-.447l-4.182-.174a.356.356,0,0,0-.31.163l-.768,1.231H6.795l.414-1.655a.35.35,0,0,0,0-.174l-.414-1.655h.583l.768,1.231a.356.356,0,0,0,.31.163l4.182-.174a.365.365,0,0,0,.316-.447Z" transform="translate(-6 -964.362)" fill="#bbb" className="jsx-2314635978"></path></g></g><g id="noun_Flight_343140-2" data-name="noun_Flight_343140" transform="translate(325.333 179.288)" className="jsx-2314635978"><g id="Group_19-2" data-name="Group 19" transform="translate(6 12)" className="jsx-2314635978"><path id="Path_51-2" data-name="Path 51" d="M10.7,964.71a.345.345,0,0,0,.016.1l1.443,4.971-3.539.147-.762-1.22a.355.355,0,0,0-.294-.163H6.348a.365.365,0,0,0-.348.348.352.352,0,0,0,.011.087l.5,2-.5,2a.351.351,0,0,0-.011.087.365.365,0,0,0,.348.349h1.22a.354.354,0,0,0,.294-.164l.762-1.22,3.539.147-1.443,4.971a.365.365,0,0,0,.332.447h1.568a.354.354,0,0,0,.294-.163l3.2-5.053,3.283.163h.016a2.155,2.155,0,0,0,1.247-.43,1.3,1.3,0,0,0,0-2.276,2.156,2.156,0,0,0-1.247-.43H19.4l-3.283.163-3.2-5.053a.356.356,0,0,0-.294-.163H11.053A.378.378,0,0,0,10.7,964.71Zm.811.349h.915l3.207,5.064a.356.356,0,0,0,.31.163l3.469-.174h.016a1.584,1.584,0,0,1,.822.3.619.619,0,0,1,0,1.143,1.586,1.586,0,0,1-.822.3h-.016l-3.469-.174a.356.356,0,0,0-.31.163l-3.207,5.064h-.915l1.438-4.955a.365.365,0,0,0-.316-.447l-4.182-.174a.356.356,0,0,0-.31.163l-.768,1.231H6.795l.414-1.655a.35.35,0,0,0,0-.174l-.414-1.655h.583l.768,1.231a.356.356,0,0,0,.31.163l4.182-.174a.365.365,0,0,0,.316-.447Z" transform="translate(-6 -964.362)" fill="#bbb" className="jsx-2314635978"></path></g></g><path id="Path_70" data-name="Path 70" d="M2263.333,1068.333s1.667-20.627,30-21,32.333,21,32.333,21" transform="translate(-1990 -883)" fill="none" stroke="#bbb" stroke-width="1" className="jsx-2314635978"></path><circle id="Ellipse_21" data-name="Ellipse 21" cx="2.5" cy="2.5" r="2.5" transform="translate(271 183)" fill="#949db2" className="jsx-2314635978"></circle><circle id="Ellipse_19" data-name="Ellipse 19" cx="2.5" cy="2.5" r="2.5" transform="translate(333 183)" fill="#949db2" className="jsx-2314635978"></circle><circle id="Ellipse_20" data-name="Ellipse 20" cx="2.5" cy="2.5" r="2.5" transform="translate(318 165)" fill="#949db2" className="jsx-2314635978"></circle><circle id="Ellipse_22" data-name="Ellipse 22" cx="2.5" cy="2.5" r="2.5" transform="translate(285 165)" fill="#949db2" className="jsx-2314635978"></circle></g></svg>
  
              <p className="text">{timing}</p>
       
    </div>
    )
  }
  else return null;
}
export default FilterIcons;
