import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu as Menu2 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { Upload } from "@atrilabs/react-component-manifests/src/manifests/Upload/Upload.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useTextBox165Cb, useTextBox166Cb, useTextBox167Cb, useButton15Cb, useFlex208Cb, useTextBox168Cb, useFlex209Cb, useMenu4Cb, useTextBox169Cb, useTextBox170Cb, useFlex214Cb, useTextBox171Cb, useTextBox172Cb, useTextBox173Cb, useButton16Cb, useFlex215Cb, useTextBox174Cb, useFlex216Cb, useMenu5Cb, useTextBox175Cb, useTextBox176Cb, useTextBox177Cb, useButton17Cb, useFlex220Cb, useTextBox178Cb, useFlex221Cb, useMenu6Cb, useFlex222Cb, useFlex223Cb, useFlex224Cb, useFlex225Cb, useFlex226Cb, useUpload2Cb, useImage40Cb } from "../page-cbs/view_project";

export default function ViewProject() {
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
    setEffectivePropsForPage("view_project")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("view_project")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const TextBox165Props = useStore((state)=>state["view_project"]["TextBox165"]);
const TextBox165IoProps = useIoStore((state)=>state["view_project"]["TextBox165"]);
const TextBox165Cb = useTextBox165Cb()
const TextBox166Props = useStore((state)=>state["view_project"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["view_project"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const TextBox167Props = useStore((state)=>state["view_project"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["view_project"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const Button15Props = useStore((state)=>state["view_project"]["Button15"]);
const Button15IoProps = useIoStore((state)=>state["view_project"]["Button15"]);
const Button15Cb = useButton15Cb()
const Flex208Props = useStore((state)=>state["view_project"]["Flex208"]);
const Flex208IoProps = useIoStore((state)=>state["view_project"]["Flex208"]);
const Flex208Cb = useFlex208Cb()
const TextBox168Props = useStore((state)=>state["view_project"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["view_project"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const Flex209Props = useStore((state)=>state["view_project"]["Flex209"]);
const Flex209IoProps = useIoStore((state)=>state["view_project"]["Flex209"]);
const Flex209Cb = useFlex209Cb()
const Menu4Props = useStore((state)=>state["view_project"]["Menu4"]);
const Menu4IoProps = useIoStore((state)=>state["view_project"]["Menu4"]);
const Menu4Cb = useMenu4Cb()
const TextBox169Props = useStore((state)=>state["view_project"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["view_project"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const TextBox170Props = useStore((state)=>state["view_project"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["view_project"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const Flex214Props = useStore((state)=>state["view_project"]["Flex214"]);
const Flex214IoProps = useIoStore((state)=>state["view_project"]["Flex214"]);
const Flex214Cb = useFlex214Cb()
const TextBox171Props = useStore((state)=>state["view_project"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["view_project"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const TextBox172Props = useStore((state)=>state["view_project"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["view_project"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const TextBox173Props = useStore((state)=>state["view_project"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["view_project"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const Button16Props = useStore((state)=>state["view_project"]["Button16"]);
const Button16IoProps = useIoStore((state)=>state["view_project"]["Button16"]);
const Button16Cb = useButton16Cb()
const Flex215Props = useStore((state)=>state["view_project"]["Flex215"]);
const Flex215IoProps = useIoStore((state)=>state["view_project"]["Flex215"]);
const Flex215Cb = useFlex215Cb()
const TextBox174Props = useStore((state)=>state["view_project"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["view_project"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const Flex216Props = useStore((state)=>state["view_project"]["Flex216"]);
const Flex216IoProps = useIoStore((state)=>state["view_project"]["Flex216"]);
const Flex216Cb = useFlex216Cb()
const Menu5Props = useStore((state)=>state["view_project"]["Menu5"]);
const Menu5IoProps = useIoStore((state)=>state["view_project"]["Menu5"]);
const Menu5Cb = useMenu5Cb()
const TextBox175Props = useStore((state)=>state["view_project"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["view_project"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const TextBox176Props = useStore((state)=>state["view_project"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["view_project"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const TextBox177Props = useStore((state)=>state["view_project"]["TextBox177"]);
const TextBox177IoProps = useIoStore((state)=>state["view_project"]["TextBox177"]);
const TextBox177Cb = useTextBox177Cb()
const Button17Props = useStore((state)=>state["view_project"]["Button17"]);
const Button17IoProps = useIoStore((state)=>state["view_project"]["Button17"]);
const Button17Cb = useButton17Cb()
const Flex220Props = useStore((state)=>state["view_project"]["Flex220"]);
const Flex220IoProps = useIoStore((state)=>state["view_project"]["Flex220"]);
const Flex220Cb = useFlex220Cb()
const TextBox178Props = useStore((state)=>state["view_project"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["view_project"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const Flex221Props = useStore((state)=>state["view_project"]["Flex221"]);
const Flex221IoProps = useIoStore((state)=>state["view_project"]["Flex221"]);
const Flex221Cb = useFlex221Cb()
const Menu6Props = useStore((state)=>state["view_project"]["Menu6"]);
const Menu6IoProps = useIoStore((state)=>state["view_project"]["Menu6"]);
const Menu6Cb = useMenu6Cb()
const Flex222Props = useStore((state)=>state["view_project"]["Flex222"]);
const Flex222IoProps = useIoStore((state)=>state["view_project"]["Flex222"]);
const Flex222Cb = useFlex222Cb()
const Flex223Props = useStore((state)=>state["view_project"]["Flex223"]);
const Flex223IoProps = useIoStore((state)=>state["view_project"]["Flex223"]);
const Flex223Cb = useFlex223Cb()
const Flex224Props = useStore((state)=>state["view_project"]["Flex224"]);
const Flex224IoProps = useIoStore((state)=>state["view_project"]["Flex224"]);
const Flex224Cb = useFlex224Cb()
const Flex225Props = useStore((state)=>state["view_project"]["Flex225"]);
const Flex225IoProps = useIoStore((state)=>state["view_project"]["Flex225"]);
const Flex225Cb = useFlex225Cb()
const Flex226Props = useStore((state)=>state["view_project"]["Flex226"]);
const Flex226IoProps = useIoStore((state)=>state["view_project"]["Flex226"]);
const Flex226Cb = useFlex226Cb()
const Upload2Props = useStore((state)=>state["view_project"]["Upload2"]);
const Upload2IoProps = useIoStore((state)=>state["view_project"]["Upload2"]);
const Upload2Cb = useUpload2Cb()
const Image40Props = useStore((state)=>state["view_project"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["view_project"]["Image40"]);
const Image40Cb = useImage40Cb()

  return (<>
  <Flex2 {...Flex224Props} {...Flex224Cb} {...Flex224IoProps}>
<Flex2 {...Flex222Props} {...Flex222Cb} {...Flex222IoProps}>
<TextBox2 {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
</Flex2>
<Flex2 {...Flex223Props} {...Flex223Cb} {...Flex223IoProps}>
<Flex2 {...Flex221Props} {...Flex221Cb} {...Flex221IoProps}>
<TextBox2 {...TextBox177Props} {...TextBox177Cb} {...TextBox177IoProps}/>
<Button2 {...Button17Props} {...Button17Cb} {...Button17IoProps}/>
</Flex2>
<Menu2 {...Menu6Props} {...Menu6Cb} {...Menu6IoProps}>
<Flex2 {...Flex220Props} {...Flex220Cb} {...Flex220IoProps}>
<TextBox2 {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
<TextBox2 {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
</Flex2>
</Menu2>
</Flex2>
</Flex2>
<Flex2 {...Flex214Props} {...Flex214Cb} {...Flex214IoProps}>
<TextBox2 {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
<TextBox2 {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
</Flex2>
<Flex2 {...Flex225Props} {...Flex225Cb} {...Flex225IoProps}>
<Flex2 {...Flex226Props} {...Flex226Cb} {...Flex226IoProps}>
<Image2 {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
<Upload {...Upload2Props} {...Upload2Cb} {...Upload2IoProps}/>
</Flex2>
</Flex2>
  </>);
}
