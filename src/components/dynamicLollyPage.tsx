import React from "react"
import Lolly from "./lolly"
import { graphql , Link } from "gatsby"
import Header from "./header"
import { useQuery } from "@apollo/client/react/hooks/useQuery"

export const query = graphql`
  query($lollyPath: String!) {
    LOLLIES {
      getLollyByPath(lollyPath: $lollyPath) {
        flavorBot
        flavorMid
        flavorTop
        lollyPath
        message
        recipientName
        sendersName
      }
    }
  }
`

// export default function DynamicLollyPage({ data }) {

//   return (
//     <div>
//       <Header
        // mainHeadingText="Virtual Lolly"
        // secondaryHeadingText="You recieved a lolly, dont eat it alone !"
//       />
//       <h5 className="sharableLinkContainer">Your shareable link: </h5>{" "}
//       <span className="sharableLink">
//         {" "}
//         {`https://shaikh-virtual-lolly.netlify.app/lollies/${data?.LOLLIES?.getLollyByPath?.lollyPath}`}
//       </span>
//       <div className="recievedContentContainer">
        // <Lolly
        //   style="lollyRecieved"
        //   lollyTop={data?.LOLLIES?.getLollyByPath?.flavorTop}
        //   lollyMid={data?.LOLLIES?.getLollyByPath?.flavorMid}
        //   lollyBot={data?.LOLLIES?.getLollyByPath?.flavorBot}
        // />

//         <div className="recievedTextContainer">
//           <h3>HI {data?.LOLLIES?.getLollyByPath?.recipientName?.toUpperCase()}</h3>
//           <p>{data?.LOLLIES?.getLollyByPath?.message}</p>
//           <h4>From: {data?.LOLLIES?.getLollyByPath?.sendersName}</h4>
//         </div>
//       </div>
//     </div>
//   )
// }

export default function LollyPage({ data }) {

  return (
    <div>
      <Header mainHeadingText="Virtual Lolly" secondaryHeadingText="You recieved a lolly, dont eat it alone !"/>

        <div className="freezedLollyCardWrapper">
          <Lolly
            style="lollyRecieved"
            lollyTop={data?.LOLLIES?.getLollyByPath?.flavorTop}
            lollyMid={data?.LOLLIES?.getLollyByPath?.flavorMid}
            lollyBot={data?.LOLLIES?.getLollyByPath?.flavorBot}
          />

          <div className="freezedLollyData">
            <div className="linkWrapper">
              <h4>Share this link with your frined</h4>
              <p>{`/lollies/${data?.LOLLIES?.getLollyByPath?.lollyPath}`}</p>
            </div>
            <div className="freezedLollyCard">
              <h1>to: {data?.LOLLIES?.getLollyByPath?.recipientName}</h1>
              <p>{data?.LOLLIES?.getLollyByPath?.message}</p>
              <h3>From: {data?.LOLLIES?.getLollyByPath?.sendersName}</h3>
            </div>
            <div className="recivermessage">
              <p>
                {data?.LOLLIES?.getLollyByPath?.sendersName} made this virtual lollipop
                for you. You can <Link to="/createNew"> make your own</Link> to
                send to a friend who deserve some sugary treat which won't rot
                their teeth...
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}