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
import { useTextBox165Cb, useTextBox166Cb, useTextBox167Cb, useButton15Cb, useFlex208Cb, useTextBox168Cb, useFlex209Cb, useMenu4Cb, useTextBox169Cb, useTextBox171Cb, useTextBox172Cb, useTextBox173Cb, useButton16Cb, useFlex215Cb, useTextBox174Cb, useFlex216Cb, useMenu5Cb, useTextBox175Cb, useTextBox176Cb, useTextBox177Cb, useButton17Cb, useFlex220Cb, useTextBox178Cb, useFlex221Cb, useMenu6Cb, useFlex226Cb, useUpload2Cb, useImage40Cb, useFlex229Cb, useImage42Cb, useTextBox182Cb, useImage43Cb, useFlex232Cb, useTextBox183Cb, useTextBox184Cb, useTextBox185Cb, useButton20Cb, useFlex233Cb, useTextBox186Cb, useFlex234Cb, useMenu7Cb, useTextBox187Cb, useTextBox188Cb, useTextBox189Cb, useButton21Cb, useFlex238Cb, useTextBox190Cb, useFlex239Cb, useMenu8Cb, useTextBox191Cb, useTextBox192Cb, useTextBox193Cb, useButton22Cb, useFlex243Cb, useTextBox194Cb, useFlex244Cb, useMenu9Cb, useTextBox195Cb, useTextBox196Cb, useTextBox197Cb, useButton23Cb, useFlex248Cb, useTextBox198Cb, useFlex249Cb, useMenu10Cb, useButton35Cb, useTextBox225Cb, useTextBox226Cb, useButton36Cb, useTextBox227Cb, useButton37Cb, useTextBox228Cb, useButton38Cb, useUpload5Cb, useImage48Cb, useTextBox229Cb, useTextBox230Cb, useTextBox231Cb, useTextBox232Cb, useFlex289Cb, useFlex290Cb, useFlex291Cb, useFlex292Cb, useFlex293Cb, useFlex294Cb, useFlex295Cb, useButton39Cb, useTextBox233Cb, useTextBox234Cb, useButton40Cb, useTextBox235Cb, useButton41Cb, useTextBox236Cb, useButton42Cb, useUpload6Cb, useImage49Cb, useTextBox237Cb, useTextBox238Cb, useTextBox239Cb, useTextBox240Cb, useFlex299Cb, useFlex300Cb, useFlex301Cb, useFlex302Cb, useFlex303Cb, useFlex304Cb, useFlex305Cb, useButton43Cb, useTextBox243Cb, useTextBox244Cb, useButton44Cb, useTextBox245Cb, useButton45Cb, useTextBox246Cb, useButton46Cb, useUpload8Cb, useImage51Cb, useTextBox247Cb, useTextBox248Cb, useTextBox249Cb, useTextBox250Cb, useFlex313Cb, useFlex314Cb, useFlex315Cb, useFlex316Cb, useFlex317Cb, useFlex318Cb, useFlex319Cb, useFlex320Cb, useFlex321Cb, useTextBox251Cb, useFlex322Cb, useFlex324Cb } from "../page-cbs/view_project";

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
const Flex226Props = useStore((state)=>state["view_project"]["Flex226"]);
const Flex226IoProps = useIoStore((state)=>state["view_project"]["Flex226"]);
const Flex226Cb = useFlex226Cb()
const Upload2Props = useStore((state)=>state["view_project"]["Upload2"]);
const Upload2IoProps = useIoStore((state)=>state["view_project"]["Upload2"]);
const Upload2Cb = useUpload2Cb()
const Image40Props = useStore((state)=>state["view_project"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["view_project"]["Image40"]);
const Image40Cb = useImage40Cb()
const Flex229Props = useStore((state)=>state["view_project"]["Flex229"]);
const Flex229IoProps = useIoStore((state)=>state["view_project"]["Flex229"]);
const Flex229Cb = useFlex229Cb()
const Image42Props = useStore((state)=>state["view_project"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["view_project"]["Image42"]);
const Image42Cb = useImage42Cb()
const TextBox182Props = useStore((state)=>state["view_project"]["TextBox182"]);
const TextBox182IoProps = useIoStore((state)=>state["view_project"]["TextBox182"]);
const TextBox182Cb = useTextBox182Cb()
const Image43Props = useStore((state)=>state["view_project"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["view_project"]["Image43"]);
const Image43Cb = useImage43Cb()
const Flex232Props = useStore((state)=>state["view_project"]["Flex232"]);
const Flex232IoProps = useIoStore((state)=>state["view_project"]["Flex232"]);
const Flex232Cb = useFlex232Cb()
const TextBox183Props = useStore((state)=>state["view_project"]["TextBox183"]);
const TextBox183IoProps = useIoStore((state)=>state["view_project"]["TextBox183"]);
const TextBox183Cb = useTextBox183Cb()
const TextBox184Props = useStore((state)=>state["view_project"]["TextBox184"]);
const TextBox184IoProps = useIoStore((state)=>state["view_project"]["TextBox184"]);
const TextBox184Cb = useTextBox184Cb()
const TextBox185Props = useStore((state)=>state["view_project"]["TextBox185"]);
const TextBox185IoProps = useIoStore((state)=>state["view_project"]["TextBox185"]);
const TextBox185Cb = useTextBox185Cb()
const Button20Props = useStore((state)=>state["view_project"]["Button20"]);
const Button20IoProps = useIoStore((state)=>state["view_project"]["Button20"]);
const Button20Cb = useButton20Cb()
const Flex233Props = useStore((state)=>state["view_project"]["Flex233"]);
const Flex233IoProps = useIoStore((state)=>state["view_project"]["Flex233"]);
const Flex233Cb = useFlex233Cb()
const TextBox186Props = useStore((state)=>state["view_project"]["TextBox186"]);
const TextBox186IoProps = useIoStore((state)=>state["view_project"]["TextBox186"]);
const TextBox186Cb = useTextBox186Cb()
const Flex234Props = useStore((state)=>state["view_project"]["Flex234"]);
const Flex234IoProps = useIoStore((state)=>state["view_project"]["Flex234"]);
const Flex234Cb = useFlex234Cb()
const Menu7Props = useStore((state)=>state["view_project"]["Menu7"]);
const Menu7IoProps = useIoStore((state)=>state["view_project"]["Menu7"]);
const Menu7Cb = useMenu7Cb()
const TextBox187Props = useStore((state)=>state["view_project"]["TextBox187"]);
const TextBox187IoProps = useIoStore((state)=>state["view_project"]["TextBox187"]);
const TextBox187Cb = useTextBox187Cb()
const TextBox188Props = useStore((state)=>state["view_project"]["TextBox188"]);
const TextBox188IoProps = useIoStore((state)=>state["view_project"]["TextBox188"]);
const TextBox188Cb = useTextBox188Cb()
const TextBox189Props = useStore((state)=>state["view_project"]["TextBox189"]);
const TextBox189IoProps = useIoStore((state)=>state["view_project"]["TextBox189"]);
const TextBox189Cb = useTextBox189Cb()
const Button21Props = useStore((state)=>state["view_project"]["Button21"]);
const Button21IoProps = useIoStore((state)=>state["view_project"]["Button21"]);
const Button21Cb = useButton21Cb()
const Flex238Props = useStore((state)=>state["view_project"]["Flex238"]);
const Flex238IoProps = useIoStore((state)=>state["view_project"]["Flex238"]);
const Flex238Cb = useFlex238Cb()
const TextBox190Props = useStore((state)=>state["view_project"]["TextBox190"]);
const TextBox190IoProps = useIoStore((state)=>state["view_project"]["TextBox190"]);
const TextBox190Cb = useTextBox190Cb()
const Flex239Props = useStore((state)=>state["view_project"]["Flex239"]);
const Flex239IoProps = useIoStore((state)=>state["view_project"]["Flex239"]);
const Flex239Cb = useFlex239Cb()
const Menu8Props = useStore((state)=>state["view_project"]["Menu8"]);
const Menu8IoProps = useIoStore((state)=>state["view_project"]["Menu8"]);
const Menu8Cb = useMenu8Cb()
const TextBox191Props = useStore((state)=>state["view_project"]["TextBox191"]);
const TextBox191IoProps = useIoStore((state)=>state["view_project"]["TextBox191"]);
const TextBox191Cb = useTextBox191Cb()
const TextBox192Props = useStore((state)=>state["view_project"]["TextBox192"]);
const TextBox192IoProps = useIoStore((state)=>state["view_project"]["TextBox192"]);
const TextBox192Cb = useTextBox192Cb()
const TextBox193Props = useStore((state)=>state["view_project"]["TextBox193"]);
const TextBox193IoProps = useIoStore((state)=>state["view_project"]["TextBox193"]);
const TextBox193Cb = useTextBox193Cb()
const Button22Props = useStore((state)=>state["view_project"]["Button22"]);
const Button22IoProps = useIoStore((state)=>state["view_project"]["Button22"]);
const Button22Cb = useButton22Cb()
const Flex243Props = useStore((state)=>state["view_project"]["Flex243"]);
const Flex243IoProps = useIoStore((state)=>state["view_project"]["Flex243"]);
const Flex243Cb = useFlex243Cb()
const TextBox194Props = useStore((state)=>state["view_project"]["TextBox194"]);
const TextBox194IoProps = useIoStore((state)=>state["view_project"]["TextBox194"]);
const TextBox194Cb = useTextBox194Cb()
const Flex244Props = useStore((state)=>state["view_project"]["Flex244"]);
const Flex244IoProps = useIoStore((state)=>state["view_project"]["Flex244"]);
const Flex244Cb = useFlex244Cb()
const Menu9Props = useStore((state)=>state["view_project"]["Menu9"]);
const Menu9IoProps = useIoStore((state)=>state["view_project"]["Menu9"]);
const Menu9Cb = useMenu9Cb()
const TextBox195Props = useStore((state)=>state["view_project"]["TextBox195"]);
const TextBox195IoProps = useIoStore((state)=>state["view_project"]["TextBox195"]);
const TextBox195Cb = useTextBox195Cb()
const TextBox196Props = useStore((state)=>state["view_project"]["TextBox196"]);
const TextBox196IoProps = useIoStore((state)=>state["view_project"]["TextBox196"]);
const TextBox196Cb = useTextBox196Cb()
const TextBox197Props = useStore((state)=>state["view_project"]["TextBox197"]);
const TextBox197IoProps = useIoStore((state)=>state["view_project"]["TextBox197"]);
const TextBox197Cb = useTextBox197Cb()
const Button23Props = useStore((state)=>state["view_project"]["Button23"]);
const Button23IoProps = useIoStore((state)=>state["view_project"]["Button23"]);
const Button23Cb = useButton23Cb()
const Flex248Props = useStore((state)=>state["view_project"]["Flex248"]);
const Flex248IoProps = useIoStore((state)=>state["view_project"]["Flex248"]);
const Flex248Cb = useFlex248Cb()
const TextBox198Props = useStore((state)=>state["view_project"]["TextBox198"]);
const TextBox198IoProps = useIoStore((state)=>state["view_project"]["TextBox198"]);
const TextBox198Cb = useTextBox198Cb()
const Flex249Props = useStore((state)=>state["view_project"]["Flex249"]);
const Flex249IoProps = useIoStore((state)=>state["view_project"]["Flex249"]);
const Flex249Cb = useFlex249Cb()
const Menu10Props = useStore((state)=>state["view_project"]["Menu10"]);
const Menu10IoProps = useIoStore((state)=>state["view_project"]["Menu10"]);
const Menu10Cb = useMenu10Cb()
const Button35Props = useStore((state)=>state["view_project"]["Button35"]);
const Button35IoProps = useIoStore((state)=>state["view_project"]["Button35"]);
const Button35Cb = useButton35Cb()
const TextBox225Props = useStore((state)=>state["view_project"]["TextBox225"]);
const TextBox225IoProps = useIoStore((state)=>state["view_project"]["TextBox225"]);
const TextBox225Cb = useTextBox225Cb()
const TextBox226Props = useStore((state)=>state["view_project"]["TextBox226"]);
const TextBox226IoProps = useIoStore((state)=>state["view_project"]["TextBox226"]);
const TextBox226Cb = useTextBox226Cb()
const Button36Props = useStore((state)=>state["view_project"]["Button36"]);
const Button36IoProps = useIoStore((state)=>state["view_project"]["Button36"]);
const Button36Cb = useButton36Cb()
const TextBox227Props = useStore((state)=>state["view_project"]["TextBox227"]);
const TextBox227IoProps = useIoStore((state)=>state["view_project"]["TextBox227"]);
const TextBox227Cb = useTextBox227Cb()
const Button37Props = useStore((state)=>state["view_project"]["Button37"]);
const Button37IoProps = useIoStore((state)=>state["view_project"]["Button37"]);
const Button37Cb = useButton37Cb()
const TextBox228Props = useStore((state)=>state["view_project"]["TextBox228"]);
const TextBox228IoProps = useIoStore((state)=>state["view_project"]["TextBox228"]);
const TextBox228Cb = useTextBox228Cb()
const Button38Props = useStore((state)=>state["view_project"]["Button38"]);
const Button38IoProps = useIoStore((state)=>state["view_project"]["Button38"]);
const Button38Cb = useButton38Cb()
const Upload5Props = useStore((state)=>state["view_project"]["Upload5"]);
const Upload5IoProps = useIoStore((state)=>state["view_project"]["Upload5"]);
const Upload5Cb = useUpload5Cb()
const Image48Props = useStore((state)=>state["view_project"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["view_project"]["Image48"]);
const Image48Cb = useImage48Cb()
const TextBox229Props = useStore((state)=>state["view_project"]["TextBox229"]);
const TextBox229IoProps = useIoStore((state)=>state["view_project"]["TextBox229"]);
const TextBox229Cb = useTextBox229Cb()
const TextBox230Props = useStore((state)=>state["view_project"]["TextBox230"]);
const TextBox230IoProps = useIoStore((state)=>state["view_project"]["TextBox230"]);
const TextBox230Cb = useTextBox230Cb()
const TextBox231Props = useStore((state)=>state["view_project"]["TextBox231"]);
const TextBox231IoProps = useIoStore((state)=>state["view_project"]["TextBox231"]);
const TextBox231Cb = useTextBox231Cb()
const TextBox232Props = useStore((state)=>state["view_project"]["TextBox232"]);
const TextBox232IoProps = useIoStore((state)=>state["view_project"]["TextBox232"]);
const TextBox232Cb = useTextBox232Cb()
const Flex289Props = useStore((state)=>state["view_project"]["Flex289"]);
const Flex289IoProps = useIoStore((state)=>state["view_project"]["Flex289"]);
const Flex289Cb = useFlex289Cb()
const Flex290Props = useStore((state)=>state["view_project"]["Flex290"]);
const Flex290IoProps = useIoStore((state)=>state["view_project"]["Flex290"]);
const Flex290Cb = useFlex290Cb()
const Flex291Props = useStore((state)=>state["view_project"]["Flex291"]);
const Flex291IoProps = useIoStore((state)=>state["view_project"]["Flex291"]);
const Flex291Cb = useFlex291Cb()
const Flex292Props = useStore((state)=>state["view_project"]["Flex292"]);
const Flex292IoProps = useIoStore((state)=>state["view_project"]["Flex292"]);
const Flex292Cb = useFlex292Cb()
const Flex293Props = useStore((state)=>state["view_project"]["Flex293"]);
const Flex293IoProps = useIoStore((state)=>state["view_project"]["Flex293"]);
const Flex293Cb = useFlex293Cb()
const Flex294Props = useStore((state)=>state["view_project"]["Flex294"]);
const Flex294IoProps = useIoStore((state)=>state["view_project"]["Flex294"]);
const Flex294Cb = useFlex294Cb()
const Flex295Props = useStore((state)=>state["view_project"]["Flex295"]);
const Flex295IoProps = useIoStore((state)=>state["view_project"]["Flex295"]);
const Flex295Cb = useFlex295Cb()
const Button39Props = useStore((state)=>state["view_project"]["Button39"]);
const Button39IoProps = useIoStore((state)=>state["view_project"]["Button39"]);
const Button39Cb = useButton39Cb()
const TextBox233Props = useStore((state)=>state["view_project"]["TextBox233"]);
const TextBox233IoProps = useIoStore((state)=>state["view_project"]["TextBox233"]);
const TextBox233Cb = useTextBox233Cb()
const TextBox234Props = useStore((state)=>state["view_project"]["TextBox234"]);
const TextBox234IoProps = useIoStore((state)=>state["view_project"]["TextBox234"]);
const TextBox234Cb = useTextBox234Cb()
const Button40Props = useStore((state)=>state["view_project"]["Button40"]);
const Button40IoProps = useIoStore((state)=>state["view_project"]["Button40"]);
const Button40Cb = useButton40Cb()
const TextBox235Props = useStore((state)=>state["view_project"]["TextBox235"]);
const TextBox235IoProps = useIoStore((state)=>state["view_project"]["TextBox235"]);
const TextBox235Cb = useTextBox235Cb()
const Button41Props = useStore((state)=>state["view_project"]["Button41"]);
const Button41IoProps = useIoStore((state)=>state["view_project"]["Button41"]);
const Button41Cb = useButton41Cb()
const TextBox236Props = useStore((state)=>state["view_project"]["TextBox236"]);
const TextBox236IoProps = useIoStore((state)=>state["view_project"]["TextBox236"]);
const TextBox236Cb = useTextBox236Cb()
const Button42Props = useStore((state)=>state["view_project"]["Button42"]);
const Button42IoProps = useIoStore((state)=>state["view_project"]["Button42"]);
const Button42Cb = useButton42Cb()
const Upload6Props = useStore((state)=>state["view_project"]["Upload6"]);
const Upload6IoProps = useIoStore((state)=>state["view_project"]["Upload6"]);
const Upload6Cb = useUpload6Cb()
const Image49Props = useStore((state)=>state["view_project"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["view_project"]["Image49"]);
const Image49Cb = useImage49Cb()
const TextBox237Props = useStore((state)=>state["view_project"]["TextBox237"]);
const TextBox237IoProps = useIoStore((state)=>state["view_project"]["TextBox237"]);
const TextBox237Cb = useTextBox237Cb()
const TextBox238Props = useStore((state)=>state["view_project"]["TextBox238"]);
const TextBox238IoProps = useIoStore((state)=>state["view_project"]["TextBox238"]);
const TextBox238Cb = useTextBox238Cb()
const TextBox239Props = useStore((state)=>state["view_project"]["TextBox239"]);
const TextBox239IoProps = useIoStore((state)=>state["view_project"]["TextBox239"]);
const TextBox239Cb = useTextBox239Cb()
const TextBox240Props = useStore((state)=>state["view_project"]["TextBox240"]);
const TextBox240IoProps = useIoStore((state)=>state["view_project"]["TextBox240"]);
const TextBox240Cb = useTextBox240Cb()
const Flex299Props = useStore((state)=>state["view_project"]["Flex299"]);
const Flex299IoProps = useIoStore((state)=>state["view_project"]["Flex299"]);
const Flex299Cb = useFlex299Cb()
const Flex300Props = useStore((state)=>state["view_project"]["Flex300"]);
const Flex300IoProps = useIoStore((state)=>state["view_project"]["Flex300"]);
const Flex300Cb = useFlex300Cb()
const Flex301Props = useStore((state)=>state["view_project"]["Flex301"]);
const Flex301IoProps = useIoStore((state)=>state["view_project"]["Flex301"]);
const Flex301Cb = useFlex301Cb()
const Flex302Props = useStore((state)=>state["view_project"]["Flex302"]);
const Flex302IoProps = useIoStore((state)=>state["view_project"]["Flex302"]);
const Flex302Cb = useFlex302Cb()
const Flex303Props = useStore((state)=>state["view_project"]["Flex303"]);
const Flex303IoProps = useIoStore((state)=>state["view_project"]["Flex303"]);
const Flex303Cb = useFlex303Cb()
const Flex304Props = useStore((state)=>state["view_project"]["Flex304"]);
const Flex304IoProps = useIoStore((state)=>state["view_project"]["Flex304"]);
const Flex304Cb = useFlex304Cb()
const Flex305Props = useStore((state)=>state["view_project"]["Flex305"]);
const Flex305IoProps = useIoStore((state)=>state["view_project"]["Flex305"]);
const Flex305Cb = useFlex305Cb()
const Button43Props = useStore((state)=>state["view_project"]["Button43"]);
const Button43IoProps = useIoStore((state)=>state["view_project"]["Button43"]);
const Button43Cb = useButton43Cb()
const TextBox243Props = useStore((state)=>state["view_project"]["TextBox243"]);
const TextBox243IoProps = useIoStore((state)=>state["view_project"]["TextBox243"]);
const TextBox243Cb = useTextBox243Cb()
const TextBox244Props = useStore((state)=>state["view_project"]["TextBox244"]);
const TextBox244IoProps = useIoStore((state)=>state["view_project"]["TextBox244"]);
const TextBox244Cb = useTextBox244Cb()
const Button44Props = useStore((state)=>state["view_project"]["Button44"]);
const Button44IoProps = useIoStore((state)=>state["view_project"]["Button44"]);
const Button44Cb = useButton44Cb()
const TextBox245Props = useStore((state)=>state["view_project"]["TextBox245"]);
const TextBox245IoProps = useIoStore((state)=>state["view_project"]["TextBox245"]);
const TextBox245Cb = useTextBox245Cb()
const Button45Props = useStore((state)=>state["view_project"]["Button45"]);
const Button45IoProps = useIoStore((state)=>state["view_project"]["Button45"]);
const Button45Cb = useButton45Cb()
const TextBox246Props = useStore((state)=>state["view_project"]["TextBox246"]);
const TextBox246IoProps = useIoStore((state)=>state["view_project"]["TextBox246"]);
const TextBox246Cb = useTextBox246Cb()
const Button46Props = useStore((state)=>state["view_project"]["Button46"]);
const Button46IoProps = useIoStore((state)=>state["view_project"]["Button46"]);
const Button46Cb = useButton46Cb()
const Upload8Props = useStore((state)=>state["view_project"]["Upload8"]);
const Upload8IoProps = useIoStore((state)=>state["view_project"]["Upload8"]);
const Upload8Cb = useUpload8Cb()
const Image51Props = useStore((state)=>state["view_project"]["Image51"]);
const Image51IoProps = useIoStore((state)=>state["view_project"]["Image51"]);
const Image51Cb = useImage51Cb()
const TextBox247Props = useStore((state)=>state["view_project"]["TextBox247"]);
const TextBox247IoProps = useIoStore((state)=>state["view_project"]["TextBox247"]);
const TextBox247Cb = useTextBox247Cb()
const TextBox248Props = useStore((state)=>state["view_project"]["TextBox248"]);
const TextBox248IoProps = useIoStore((state)=>state["view_project"]["TextBox248"]);
const TextBox248Cb = useTextBox248Cb()
const TextBox249Props = useStore((state)=>state["view_project"]["TextBox249"]);
const TextBox249IoProps = useIoStore((state)=>state["view_project"]["TextBox249"]);
const TextBox249Cb = useTextBox249Cb()
const TextBox250Props = useStore((state)=>state["view_project"]["TextBox250"]);
const TextBox250IoProps = useIoStore((state)=>state["view_project"]["TextBox250"]);
const TextBox250Cb = useTextBox250Cb()
const Flex313Props = useStore((state)=>state["view_project"]["Flex313"]);
const Flex313IoProps = useIoStore((state)=>state["view_project"]["Flex313"]);
const Flex313Cb = useFlex313Cb()
const Flex314Props = useStore((state)=>state["view_project"]["Flex314"]);
const Flex314IoProps = useIoStore((state)=>state["view_project"]["Flex314"]);
const Flex314Cb = useFlex314Cb()
const Flex315Props = useStore((state)=>state["view_project"]["Flex315"]);
const Flex315IoProps = useIoStore((state)=>state["view_project"]["Flex315"]);
const Flex315Cb = useFlex315Cb()
const Flex316Props = useStore((state)=>state["view_project"]["Flex316"]);
const Flex316IoProps = useIoStore((state)=>state["view_project"]["Flex316"]);
const Flex316Cb = useFlex316Cb()
const Flex317Props = useStore((state)=>state["view_project"]["Flex317"]);
const Flex317IoProps = useIoStore((state)=>state["view_project"]["Flex317"]);
const Flex317Cb = useFlex317Cb()
const Flex318Props = useStore((state)=>state["view_project"]["Flex318"]);
const Flex318IoProps = useIoStore((state)=>state["view_project"]["Flex318"]);
const Flex318Cb = useFlex318Cb()
const Flex319Props = useStore((state)=>state["view_project"]["Flex319"]);
const Flex319IoProps = useIoStore((state)=>state["view_project"]["Flex319"]);
const Flex319Cb = useFlex319Cb()
const Flex320Props = useStore((state)=>state["view_project"]["Flex320"]);
const Flex320IoProps = useIoStore((state)=>state["view_project"]["Flex320"]);
const Flex320Cb = useFlex320Cb()
const Flex321Props = useStore((state)=>state["view_project"]["Flex321"]);
const Flex321IoProps = useIoStore((state)=>state["view_project"]["Flex321"]);
const Flex321Cb = useFlex321Cb()
const TextBox251Props = useStore((state)=>state["view_project"]["TextBox251"]);
const TextBox251IoProps = useIoStore((state)=>state["view_project"]["TextBox251"]);
const TextBox251Cb = useTextBox251Cb()
const Flex322Props = useStore((state)=>state["view_project"]["Flex322"]);
const Flex322IoProps = useIoStore((state)=>state["view_project"]["Flex322"]);
const Flex322Cb = useFlex322Cb()
const Flex324Props = useStore((state)=>state["view_project"]["Flex324"]);
const Flex324IoProps = useIoStore((state)=>state["view_project"]["Flex324"]);
const Flex324Cb = useFlex324Cb()

  return (<>
  <Flex2 {...Flex232Props} {...Flex232Cb} {...Flex232IoProps}>
<TextBox2 {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
<Flex2 {...Flex324Props} {...Flex324Cb} {...Flex324IoProps}>
<Flex2 {...Flex322Props} {...Flex322Cb} {...Flex322IoProps}>
<Flex2 {...Flex320Props} {...Flex320Cb} {...Flex320IoProps}>
<Flex2 {...Flex317Props} {...Flex317Cb} {...Flex317IoProps}>
<Image2 {...Image51Props} {...Image51Cb} {...Image51IoProps}/>
<Upload {...Upload8Props} {...Upload8Cb} {...Upload8IoProps}/>
</Flex2>
</Flex2>
<Flex2 {...Flex321Props} {...Flex321Cb} {...Flex321IoProps}>
<Flex2 {...Flex319Props} {...Flex319Cb} {...Flex319IoProps}>
<Flex2 {...Flex316Props} {...Flex316Cb} {...Flex316IoProps}>
<Button2 {...Button46Props} {...Button46Cb} {...Button46IoProps}/>
<TextBox2 {...TextBox246Props} {...TextBox246Cb} {...TextBox246IoProps}/>
</Flex2>
<Flex2 {...Flex315Props} {...Flex315Cb} {...Flex315IoProps}>
<Button2 {...Button45Props} {...Button45Cb} {...Button45IoProps}/>
<TextBox2 {...TextBox245Props} {...TextBox245Cb} {...TextBox245IoProps}/>
</Flex2>
<Flex2 {...Flex314Props} {...Flex314Cb} {...Flex314IoProps}>
<Button2 {...Button44Props} {...Button44Cb} {...Button44IoProps}/>
<TextBox2 {...TextBox244Props} {...TextBox244Cb} {...TextBox244IoProps}/>
</Flex2>
<Flex2 {...Flex313Props} {...Flex313Cb} {...Flex313IoProps}>
<Button2 {...Button43Props} {...Button43Cb} {...Button43IoProps}/>
<TextBox2 {...TextBox243Props} {...TextBox243Cb} {...TextBox243IoProps}/>
</Flex2>
</Flex2>
<Flex2 {...Flex318Props} {...Flex318Cb} {...Flex318IoProps}>
<TextBox2 {...TextBox250Props} {...TextBox250Cb} {...TextBox250IoProps}/>
<TextBox2 {...TextBox249Props} {...TextBox249Cb} {...TextBox249IoProps}/>
<TextBox2 {...TextBox248Props} {...TextBox248Cb} {...TextBox248IoProps}/>
<TextBox2 {...TextBox247Props} {...TextBox247Cb} {...TextBox247IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<TextBox2 {...TextBox251Props} {...TextBox251Cb} {...TextBox251IoProps}/>
</Flex2>
<Image2 {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
<Flex2 {...Flex229Props} {...Flex229Cb} {...Flex229IoProps}>
<Image2 {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
<TextBox2 {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
</Flex2>
</Flex2>
  </>);
}
