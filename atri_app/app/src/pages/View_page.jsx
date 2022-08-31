import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { TextBox as TextBox3 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button3 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Flex as Flex3 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu as Menu3 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { Image as Image3 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Upload as Upload1 } from "@atrilabs/react-component-manifests/src/manifests/Upload/Upload.tsx";
import { useTextBox199Cb, useTextBox200Cb, useTextBox201Cb, useButton24Cb, useFlex253Cb, useTextBox202Cb, useFlex254Cb, useMenu11Cb, useImage44Cb, useUpload3Cb, useFlex258Cb, useFlex259Cb, useTextBox203Cb, useTextBox204Cb, useImage45Cb, useTextBox206Cb, useFlex263Cb, useButton25Cb, useTextBox207Cb, useFlex264Cb, useButton26Cb, useTextBox208Cb, useButton27Cb, useTextBox210Cb, useFlex269Cb, useFlex270Cb, useTextBox211Cb, useTextBox212Cb, useButton28Cb, useFlex272Cb, useTextBox213Cb, useFlex273Cb, useButton29Cb, useTextBox214Cb, useFlex275Cb, useFlex276Cb, useTextBox215Cb, useFlex278Cb, useButton30Cb, useTextBox216Cb, useFlex279Cb, useButton31Cb, useTextBox217Cb, useFlex280Cb, useButton33Cb, useTextBox219Cb, useFlex282Cb, useFlex283Cb, useTextBox220Cb, useTextBox221Cb, useTextBox222Cb, useFlex284Cb, useTextBox223Cb, useButton34Cb, useFlex285Cb, useTextBox224Cb, useFlex286Cb, useImage47Cb, useUpload4Cb, useFlex287Cb, useFlex288Cb, useImage50Cb, useUpload7Cb, useFlex312Cb, useTextBox242Cb } from "../page-cbs/view_page";

export default function ViewPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [])

  useLayoutEffect(()=>{
    setEffectivePropsForPage("view_page")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("view_page")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const TextBox199Props = useStore((state)=>state["view_page"]["TextBox199"]);
const TextBox199IoProps = useIoStore((state)=>state["view_page"]["TextBox199"]);
const TextBox199Cb = useTextBox199Cb()
const TextBox200Props = useStore((state)=>state["view_page"]["TextBox200"]);
const TextBox200IoProps = useIoStore((state)=>state["view_page"]["TextBox200"]);
const TextBox200Cb = useTextBox200Cb()
const TextBox201Props = useStore((state)=>state["view_page"]["TextBox201"]);
const TextBox201IoProps = useIoStore((state)=>state["view_page"]["TextBox201"]);
const TextBox201Cb = useTextBox201Cb()
const Button24Props = useStore((state)=>state["view_page"]["Button24"]);
const Button24IoProps = useIoStore((state)=>state["view_page"]["Button24"]);
const Button24Cb = useButton24Cb()
const Flex253Props = useStore((state)=>state["view_page"]["Flex253"]);
const Flex253IoProps = useIoStore((state)=>state["view_page"]["Flex253"]);
const Flex253Cb = useFlex253Cb()
const TextBox202Props = useStore((state)=>state["view_page"]["TextBox202"]);
const TextBox202IoProps = useIoStore((state)=>state["view_page"]["TextBox202"]);
const TextBox202Cb = useTextBox202Cb()
const Flex254Props = useStore((state)=>state["view_page"]["Flex254"]);
const Flex254IoProps = useIoStore((state)=>state["view_page"]["Flex254"]);
const Flex254Cb = useFlex254Cb()
const Menu11Props = useStore((state)=>state["view_page"]["Menu11"]);
const Menu11IoProps = useIoStore((state)=>state["view_page"]["Menu11"]);
const Menu11Cb = useMenu11Cb()
const Image44Props = useStore((state)=>state["view_page"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["view_page"]["Image44"]);
const Image44Cb = useImage44Cb()
const Upload3Props = useStore((state)=>state["view_page"]["Upload3"]);
const Upload3IoProps = useIoStore((state)=>state["view_page"]["Upload3"]);
const Upload3Cb = useUpload3Cb()
const Flex258Props = useStore((state)=>state["view_page"]["Flex258"]);
const Flex258IoProps = useIoStore((state)=>state["view_page"]["Flex258"]);
const Flex258Cb = useFlex258Cb()
const Flex259Props = useStore((state)=>state["view_page"]["Flex259"]);
const Flex259IoProps = useIoStore((state)=>state["view_page"]["Flex259"]);
const Flex259Cb = useFlex259Cb()
const TextBox203Props = useStore((state)=>state["view_page"]["TextBox203"]);
const TextBox203IoProps = useIoStore((state)=>state["view_page"]["TextBox203"]);
const TextBox203Cb = useTextBox203Cb()
const TextBox204Props = useStore((state)=>state["view_page"]["TextBox204"]);
const TextBox204IoProps = useIoStore((state)=>state["view_page"]["TextBox204"]);
const TextBox204Cb = useTextBox204Cb()
const Image45Props = useStore((state)=>state["view_page"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["view_page"]["Image45"]);
const Image45Cb = useImage45Cb()
const TextBox206Props = useStore((state)=>state["view_page"]["TextBox206"]);
const TextBox206IoProps = useIoStore((state)=>state["view_page"]["TextBox206"]);
const TextBox206Cb = useTextBox206Cb()
const Flex263Props = useStore((state)=>state["view_page"]["Flex263"]);
const Flex263IoProps = useIoStore((state)=>state["view_page"]["Flex263"]);
const Flex263Cb = useFlex263Cb()
const Button25Props = useStore((state)=>state["view_page"]["Button25"]);
const Button25IoProps = useIoStore((state)=>state["view_page"]["Button25"]);
const Button25Cb = useButton25Cb()
const TextBox207Props = useStore((state)=>state["view_page"]["TextBox207"]);
const TextBox207IoProps = useIoStore((state)=>state["view_page"]["TextBox207"]);
const TextBox207Cb = useTextBox207Cb()
const Flex264Props = useStore((state)=>state["view_page"]["Flex264"]);
const Flex264IoProps = useIoStore((state)=>state["view_page"]["Flex264"]);
const Flex264Cb = useFlex264Cb()
const Button26Props = useStore((state)=>state["view_page"]["Button26"]);
const Button26IoProps = useIoStore((state)=>state["view_page"]["Button26"]);
const Button26Cb = useButton26Cb()
const TextBox208Props = useStore((state)=>state["view_page"]["TextBox208"]);
const TextBox208IoProps = useIoStore((state)=>state["view_page"]["TextBox208"]);
const TextBox208Cb = useTextBox208Cb()
const Button27Props = useStore((state)=>state["view_page"]["Button27"]);
const Button27IoProps = useIoStore((state)=>state["view_page"]["Button27"]);
const Button27Cb = useButton27Cb()
const TextBox210Props = useStore((state)=>state["view_page"]["TextBox210"]);
const TextBox210IoProps = useIoStore((state)=>state["view_page"]["TextBox210"]);
const TextBox210Cb = useTextBox210Cb()
const Flex269Props = useStore((state)=>state["view_page"]["Flex269"]);
const Flex269IoProps = useIoStore((state)=>state["view_page"]["Flex269"]);
const Flex269Cb = useFlex269Cb()
const Flex270Props = useStore((state)=>state["view_page"]["Flex270"]);
const Flex270IoProps = useIoStore((state)=>state["view_page"]["Flex270"]);
const Flex270Cb = useFlex270Cb()
const TextBox211Props = useStore((state)=>state["view_page"]["TextBox211"]);
const TextBox211IoProps = useIoStore((state)=>state["view_page"]["TextBox211"]);
const TextBox211Cb = useTextBox211Cb()
const TextBox212Props = useStore((state)=>state["view_page"]["TextBox212"]);
const TextBox212IoProps = useIoStore((state)=>state["view_page"]["TextBox212"]);
const TextBox212Cb = useTextBox212Cb()
const Button28Props = useStore((state)=>state["view_page"]["Button28"]);
const Button28IoProps = useIoStore((state)=>state["view_page"]["Button28"]);
const Button28Cb = useButton28Cb()
const Flex272Props = useStore((state)=>state["view_page"]["Flex272"]);
const Flex272IoProps = useIoStore((state)=>state["view_page"]["Flex272"]);
const Flex272Cb = useFlex272Cb()
const TextBox213Props = useStore((state)=>state["view_page"]["TextBox213"]);
const TextBox213IoProps = useIoStore((state)=>state["view_page"]["TextBox213"]);
const TextBox213Cb = useTextBox213Cb()
const Flex273Props = useStore((state)=>state["view_page"]["Flex273"]);
const Flex273IoProps = useIoStore((state)=>state["view_page"]["Flex273"]);
const Flex273Cb = useFlex273Cb()
const Button29Props = useStore((state)=>state["view_page"]["Button29"]);
const Button29IoProps = useIoStore((state)=>state["view_page"]["Button29"]);
const Button29Cb = useButton29Cb()
const TextBox214Props = useStore((state)=>state["view_page"]["TextBox214"]);
const TextBox214IoProps = useIoStore((state)=>state["view_page"]["TextBox214"]);
const TextBox214Cb = useTextBox214Cb()
const Flex275Props = useStore((state)=>state["view_page"]["Flex275"]);
const Flex275IoProps = useIoStore((state)=>state["view_page"]["Flex275"]);
const Flex275Cb = useFlex275Cb()
const Flex276Props = useStore((state)=>state["view_page"]["Flex276"]);
const Flex276IoProps = useIoStore((state)=>state["view_page"]["Flex276"]);
const Flex276Cb = useFlex276Cb()
const TextBox215Props = useStore((state)=>state["view_page"]["TextBox215"]);
const TextBox215IoProps = useIoStore((state)=>state["view_page"]["TextBox215"]);
const TextBox215Cb = useTextBox215Cb()
const Flex278Props = useStore((state)=>state["view_page"]["Flex278"]);
const Flex278IoProps = useIoStore((state)=>state["view_page"]["Flex278"]);
const Flex278Cb = useFlex278Cb()
const Button30Props = useStore((state)=>state["view_page"]["Button30"]);
const Button30IoProps = useIoStore((state)=>state["view_page"]["Button30"]);
const Button30Cb = useButton30Cb()
const TextBox216Props = useStore((state)=>state["view_page"]["TextBox216"]);
const TextBox216IoProps = useIoStore((state)=>state["view_page"]["TextBox216"]);
const TextBox216Cb = useTextBox216Cb()
const Flex279Props = useStore((state)=>state["view_page"]["Flex279"]);
const Flex279IoProps = useIoStore((state)=>state["view_page"]["Flex279"]);
const Flex279Cb = useFlex279Cb()
const Button31Props = useStore((state)=>state["view_page"]["Button31"]);
const Button31IoProps = useIoStore((state)=>state["view_page"]["Button31"]);
const Button31Cb = useButton31Cb()
const TextBox217Props = useStore((state)=>state["view_page"]["TextBox217"]);
const TextBox217IoProps = useIoStore((state)=>state["view_page"]["TextBox217"]);
const TextBox217Cb = useTextBox217Cb()
const Flex280Props = useStore((state)=>state["view_page"]["Flex280"]);
const Flex280IoProps = useIoStore((state)=>state["view_page"]["Flex280"]);
const Flex280Cb = useFlex280Cb()
const Button33Props = useStore((state)=>state["view_page"]["Button33"]);
const Button33IoProps = useIoStore((state)=>state["view_page"]["Button33"]);
const Button33Cb = useButton33Cb()
const TextBox219Props = useStore((state)=>state["view_page"]["TextBox219"]);
const TextBox219IoProps = useIoStore((state)=>state["view_page"]["TextBox219"]);
const TextBox219Cb = useTextBox219Cb()
const Flex282Props = useStore((state)=>state["view_page"]["Flex282"]);
const Flex282IoProps = useIoStore((state)=>state["view_page"]["Flex282"]);
const Flex282Cb = useFlex282Cb()
const Flex283Props = useStore((state)=>state["view_page"]["Flex283"]);
const Flex283IoProps = useIoStore((state)=>state["view_page"]["Flex283"]);
const Flex283Cb = useFlex283Cb()
const TextBox220Props = useStore((state)=>state["view_page"]["TextBox220"]);
const TextBox220IoProps = useIoStore((state)=>state["view_page"]["TextBox220"]);
const TextBox220Cb = useTextBox220Cb()
const TextBox221Props = useStore((state)=>state["view_page"]["TextBox221"]);
const TextBox221IoProps = useIoStore((state)=>state["view_page"]["TextBox221"]);
const TextBox221Cb = useTextBox221Cb()
const TextBox222Props = useStore((state)=>state["view_page"]["TextBox222"]);
const TextBox222IoProps = useIoStore((state)=>state["view_page"]["TextBox222"]);
const TextBox222Cb = useTextBox222Cb()
const Flex284Props = useStore((state)=>state["view_page"]["Flex284"]);
const Flex284IoProps = useIoStore((state)=>state["view_page"]["Flex284"]);
const Flex284Cb = useFlex284Cb()
const TextBox223Props = useStore((state)=>state["view_page"]["TextBox223"]);
const TextBox223IoProps = useIoStore((state)=>state["view_page"]["TextBox223"]);
const TextBox223Cb = useTextBox223Cb()
const Button34Props = useStore((state)=>state["view_page"]["Button34"]);
const Button34IoProps = useIoStore((state)=>state["view_page"]["Button34"]);
const Button34Cb = useButton34Cb()
const Flex285Props = useStore((state)=>state["view_page"]["Flex285"]);
const Flex285IoProps = useIoStore((state)=>state["view_page"]["Flex285"]);
const Flex285Cb = useFlex285Cb()
const TextBox224Props = useStore((state)=>state["view_page"]["TextBox224"]);
const TextBox224IoProps = useIoStore((state)=>state["view_page"]["TextBox224"]);
const TextBox224Cb = useTextBox224Cb()
const Flex286Props = useStore((state)=>state["view_page"]["Flex286"]);
const Flex286IoProps = useIoStore((state)=>state["view_page"]["Flex286"]);
const Flex286Cb = useFlex286Cb()
const Image47Props = useStore((state)=>state["view_page"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["view_page"]["Image47"]);
const Image47Cb = useImage47Cb()
const Upload4Props = useStore((state)=>state["view_page"]["Upload4"]);
const Upload4IoProps = useIoStore((state)=>state["view_page"]["Upload4"]);
const Upload4Cb = useUpload4Cb()
const Flex287Props = useStore((state)=>state["view_page"]["Flex287"]);
const Flex287IoProps = useIoStore((state)=>state["view_page"]["Flex287"]);
const Flex287Cb = useFlex287Cb()
const Flex288Props = useStore((state)=>state["view_page"]["Flex288"]);
const Flex288IoProps = useIoStore((state)=>state["view_page"]["Flex288"]);
const Flex288Cb = useFlex288Cb()
const Image50Props = useStore((state)=>state["view_page"]["Image50"]);
const Image50IoProps = useIoStore((state)=>state["view_page"]["Image50"]);
const Image50Cb = useImage50Cb()
const Upload7Props = useStore((state)=>state["view_page"]["Upload7"]);
const Upload7IoProps = useIoStore((state)=>state["view_page"]["Upload7"]);
const Upload7Cb = useUpload7Cb()
const Flex312Props = useStore((state)=>state["view_page"]["Flex312"]);
const Flex312IoProps = useIoStore((state)=>state["view_page"]["Flex312"]);
const Flex312Cb = useFlex312Cb()
const TextBox242Props = useStore((state)=>state["view_page"]["TextBox242"]);
const TextBox242IoProps = useIoStore((state)=>state["view_page"]["TextBox242"]);
const TextBox242Cb = useTextBox242Cb()

  return (<>
  <Flex3 {...Flex312Props} {...Flex312Cb} {...Flex312IoProps}>
<Flex3 {...Flex286Props} {...Flex286Cb} {...Flex286IoProps}>
<Flex3 {...Flex288Props} {...Flex288Cb} {...Flex288IoProps}>
<Flex3 {...Flex287Props} {...Flex287Cb} {...Flex287IoProps}>
<Image3 {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
<Upload1 {...Upload4Props} {...Upload4Cb} {...Upload4IoProps}/>
</Flex3>
</Flex3>
<Flex3 {...Flex284Props} {...Flex284Cb} {...Flex284IoProps}>
<Flex3 {...Flex278Props} {...Flex278Cb} {...Flex278IoProps}>
<Flex3 {...Flex279Props} {...Flex279Cb} {...Flex279IoProps}>
<Button3 {...Button30Props} {...Button30Cb} {...Button30IoProps}/>
<TextBox3 {...TextBox216Props} {...TextBox216Cb} {...TextBox216IoProps}/>
</Flex3>
<Flex3 {...Flex280Props} {...Flex280Cb} {...Flex280IoProps}>
<Button3 {...Button31Props} {...Button31Cb} {...Button31IoProps}/>
<TextBox3 {...TextBox217Props} {...TextBox217Cb} {...TextBox217IoProps}/>
</Flex3>
<Flex3 {...Flex282Props} {...Flex282Cb} {...Flex282IoProps}>
<Button3 {...Button33Props} {...Button33Cb} {...Button33IoProps}/>
<TextBox3 {...TextBox219Props} {...TextBox219Cb} {...TextBox219IoProps}/>
</Flex3>
<Flex3 {...Flex285Props} {...Flex285Cb} {...Flex285IoProps}>
<Button3 {...Button34Props} {...Button34Cb} {...Button34IoProps}/>
<TextBox3 {...TextBox223Props} {...TextBox223Cb} {...TextBox223IoProps}/>
</Flex3>
</Flex3>
<Flex3 {...Flex283Props} {...Flex283Cb} {...Flex283IoProps}>
<TextBox3 {...TextBox220Props} {...TextBox220Cb} {...TextBox220IoProps}/>
<TextBox3 {...TextBox221Props} {...TextBox221Cb} {...TextBox221IoProps}/>
<TextBox3 {...TextBox222Props} {...TextBox222Cb} {...TextBox222IoProps}/>
<TextBox3 {...TextBox224Props} {...TextBox224Cb} {...TextBox224IoProps}/>
</Flex3>
</Flex3>
</Flex3>
<TextBox3 {...TextBox242Props} {...TextBox242Cb} {...TextBox242IoProps}/>
</Flex3>
  </>);
}
