import React, {useState, useRef} from 'react';

import {
    BrowserRouter as Router,
} from 'react-router-dom';

import { AppShell } from '@mantine/core';
import TopIcon from './TopIcon.jsx';
import MiniMap from './MiniMap.jsx';

import "../css/aside.less"

const Main = (props) => {
    const mainContentRef = useRef(null);

    return <Router className="flex-container" >
        <AppShell
            layout="alt"
            padding="md"
            navbar={{ width: 75, breakpoint: 'xs'}}
            aside={{ width: 80, breakpoint: 'xs'}}
        >
            <AppShell.Navbar p="xs">
                <TopIcon icons={props.icons} style={{aspectRatio: "1/1", width: "100%"}} mobile/>
                <MiniMap content={mainContentRef}/>
            </AppShell.Navbar>
            <AppShell.Main ref={mainContentRef}>
                Alt layout – Navbar and Aside are rendered on top on Header and Footer

                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum nec turpis id dignissim. Cras bibendum eros quis justo lobortis volutpat. Morbi pharetra, nisl ac tristique laoreet, mi nisl faucibus velit, vel congue ligula tortor nec leo. Nullam volutpat erat vitae lobortis euismod. Donec quis nibh mollis urna rhoncus tempus id sit amet dui. Morbi efficitur malesuada lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla luctus elit ac justo vulputate lacinia.

                Vestibulum metus neque, auctor sed sem in, consequat pharetra metus. Vivamus vestibulum arcu tincidunt tellus hendrerit lacinia. Nulla facilisi. Ut dignissim, urna luctus lacinia venenatis, libero felis lacinia diam, quis sodales turpis est at justo. Vivamus ut lacinia odio, sit amet egestas elit. Cras vestibulum diam elementum, laoreet enim a, molestie ipsum. In hac habitasse platea dictumst. Sed ac sem justo. Nunc eget condimentum enim. Curabitur porttitor condimentum egestas. Vestibulum tincidunt tortor non iaculis aliquet. Quisque id aliquam odio, eget pulvinar mi.

                <br />
                <br />
                <br />
                Pellentesque suscipit felis a molestie pellentesque. Phasellus rutrum mollis dui sit amet consectetur. Proin scelerisque vulputate neque vitae commodo. Proin vel arcu ornare, varius enim at, tincidunt metus. Vivamus quis tempus est, ac aliquet ex. In hac habitasse platea dictumst. Vestibulum in turpis elementum, egestas sem eleifend, faucibus lorem. Vivamus lectus mi, accumsan sit amet eros a, volutpat pharetra ipsum. Quisque in scelerisque justo. Donec porta congue magna eget commodo. Vivamus quis lectus turpis. In egestas mattis nulla non pharetra. Suspendisse suscipit non nibh eget volutpat. Fusce placerat mi arcu, convallis pharetra odio vehicula ac. Proin felis lorem, aliquam a elit at, molestie sollicitudin augue. Nam lectus eros, aliquam ut nisi id, sodales efficitur massa.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum nec turpis id dignissim. Cras bibendum eros quis justo lobortis volutpat. Morbi pharetra, nisl ac tristique laoreet, mi nisl faucibus velit, vel congue ligula tortor nec leo. Nullam volutpat erat vitae lobortis euismod. Donec quis nibh mollis urna rhoncus tempus id sit amet dui. Morbi efficitur malesuada lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla luctus elit ac justo vulputate lacinia.

                Vestibulum metus neque, auctor sed sem in, consequat pharetra metus. Vivamus vestibulum arcu tincidunt tellus hendrerit lacinia. Nulla facilisi. Ut dignissim, urna luctus lacinia venenatis, libero felis lacinia diam, quis sodales turpis est at justo. Vivamus ut lacinia odio, sit amet egestas elit. Cras vestibulum diam elementum, laoreet enim a, molestie ipsum. In hac habitasse platea dictumst. Sed ac sem justo. Nunc eget condimentum enim. Curabitur porttitor condimentum egestas. Vestibulum tincidunt tortor non iaculis aliquet. Quisque id aliquam odio, eget pulvinar mi.

                Pellentesque suscipit felis a molestie pellentesque. Phasellus rutrum mollis dui sit amet consectetur. Proin scelerisque vulputate neque vitae commodo. Proin vel arcu ornare, varius enim at, tincidunt metus. Vivamus quis tempus est, ac aliquet ex. In hac habitasse platea dictumst. Vestibulum in turpis elementum, egestas sem eleifend, faucibus lorem. Vivamus lectus mi, accumsan sit amet eros a, volutpat pharetra ipsum. Quisque in scelerisque justo. Donec porta congue magna eget commodo. Vivamus quis lectus turpis. In egestas mattis nulla non pharetra. Suspendisse suscipit non nibh eget volutpat. Fusce placerat mi arcu, convallis pharetra odio vehicula ac. Proin felis lorem, aliquam a elit at, molestie sollicitudin augue. Nam lectus eros, aliquam ut nisi id, sodales efficitur massa.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> 
                <br />
                <br />
                Fusce rhoncus accumsan venenatis. Aliquam at nisl sit amet lectus lacinia imperdiet. Sed vel erat varius, ultricies purus et, consequat lorem. Vivamus elit ipsum, tincidunt ut molestie id, vulputate ut erat. Suspendisse placerat feugiat diam vel elementum. Ut mattis efficitur sapien, non maximus quam tincidunt vel. Nunc in lectus arcu. Nulla pharetra, orci id gravida sagittis, magna neque congue leo, sit amet pretium nunc libero et mauris. Quisque tristique tellus ac nisl tincidunt tristique nec eu quam. Maecenas interdum, dui non maximus maximus, ex ligula sagittis velit, non malesuada risus purus at nisl. Etiam suscipit, lorem id efficitur tristique, eros magna posuere augue, at sagittis sem orci et orci.

                Pellentesque tincidunt neque ac magna maximus cursus. Integer aliquam lectus rhoncus tellus efficitur sollicitudin. Pellentesque eget laoreet mi, vel vestibulum ex. Etiam interdum nisl non quam placerat rhoncus. Integer ac eleifend elit. Etiam eleifend arcu metus. Aliquam et hendrerit velit.
            

                Alt layout – Navbar and Aside are rendered on top on Header and Footer

                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum nec turpis id dignissim. Cras bibendum eros quis justo lobortis volutpat. Morbi pharetra, nisl ac tristique laoreet, mi nisl faucibus velit, vel congue ligula tortor nec leo. Nullam volutpat erat vitae lobortis euismod. Donec quis nibh mollis urna rhoncus tempus id sit amet dui. Morbi efficitur malesuada lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla luctus elit ac justo vulputate lacinia.

                Vestibulum metus neque, auctor sed sem in, consequat pharetra metus. Vivamus vestibulum arcu tincidunt tellus hendrerit lacinia. Nulla facilisi. Ut dignissim, urna luctus lacinia venenatis, libero felis lacinia diam, quis sodales turpis est at justo. Vivamus ut lacinia odio, sit amet egestas elit. Cras vestibulum diam elementum, laoreet enim a, molestie ipsum. In hac habitasse platea dictumst. Sed ac sem justo. Nunc eget condimentum enim. Curabitur porttitor condimentum egestas. Vestibulum tincidunt tortor non iaculis aliquet. Quisque id aliquam odio, eget pulvinar mi.

                <br />
                <br />
                <br />
                Pellentesque suscipit felis a molestie pellentesque. Phasellus rutrum mollis dui sit amet consectetur. Proin scelerisque vulputate neque vitae commodo. Proin vel arcu ornare, varius enim at, tincidunt metus. Vivamus quis tempus est, ac aliquet ex. In hac habitasse platea dictumst. Vestibulum in turpis elementum, egestas sem eleifend, faucibus lorem. Vivamus lectus mi, accumsan sit amet eros a, volutpat pharetra ipsum. Quisque in scelerisque justo. Donec porta congue magna eget commodo. Vivamus quis lectus turpis. In egestas mattis nulla non pharetra. Suspendisse suscipit non nibh eget volutpat. Fusce placerat mi arcu, convallis pharetra odio vehicula ac. Proin felis lorem, aliquam a elit at, molestie sollicitudin augue. Nam lectus eros, aliquam ut nisi id, sodales efficitur massa.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                Fusce rhoncus accumsan venenatis. Aliquam at nisl sit amet lectus lacinia imperdiet. Sed vel erat varius, ultricies purus et, consequat lorem. Vivamus elit ipsum, tincidunt ut molestie id, vulputate ut erat. Suspendisse placerat feugiat diam vel elementum. Ut mattis efficitur sapien, non maximus quam tincidunt vel. Nunc in lectus arcu. Nulla pharetra, orci id gravida sagittis, magna neque congue leo, sit amet pretium nunc libero et mauris. Quisque tristique tellus ac nisl tincidunt tristique nec eu quam. Maecenas interdum, dui non maximus maximus, ex ligula sagittis velit, non malesuada risus purus at nisl. Etiam suscipit, lorem id efficitur tristique, eros magna posuere augue, at sagittis sem orci et orci.

                Pellentesque tincidunt neque ac magna maximus cursus. Integer aliquam lectus rhoncus tellus efficitur sollicitudin. Pellentesque eget laoreet mi, vel vestibulum ex. Etiam interdum nisl non quam placerat rhoncus. Integer ac eleifend elit. Etiam eleifend arcu metus. Aliquam et hendrerit velit.
            
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> 
                <br />
                <br />

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum nec turpis id dignissim. Cras bibendum eros quis justo lobortis volutpat. Morbi pharetra, nisl ac tristique laoreet, mi nisl faucibus velit, vel congue ligula tortor nec leo. Nullam volutpat erat vitae lobortis euismod. Donec quis nibh mollis urna rhoncus tempus id sit amet dui. Morbi efficitur malesuada lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla luctus elit ac justo vulputate lacinia.

                Vestibulum metus neque, auctor sed sem in, consequat pharetra metus. Vivamus vestibulum arcu tincidunt tellus hendrerit lacinia. Nulla facilisi. Ut dignissim, urna luctus lacinia venenatis, libero felis lacinia diam, quis sodales turpis est at justo. Vivamus ut lacinia odio, sit amet egestas elit. Cras vestibulum diam elementum, laoreet enim a, molestie ipsum. In hac habitasse platea dictumst. Sed ac sem justo. Nunc eget condimentum enim. Curabitur porttitor condimentum egestas. Vestibulum tincidunt tortor non iaculis aliquet. Quisque id aliquam odio, eget pulvinar mi.

                Pellentesque suscipit felis a molestie pellentesque. Phasellus rutrum mollis dui sit amet consectetur. Proin scelerisque vulputate neque vitae commodo. Proin vel arcu ornare, varius enim at, tincidunt metus. Vivamus quis tempus est, ac aliquet ex. In hac habitasse platea dictumst. Vestibulum in turpis elementum, egestas sem eleifend, faucibus lorem. Vivamus lectus mi, accumsan sit amet eros a, volutpat pharetra ipsum. Quisque in scelerisque justo. Donec porta congue magna eget commodo. Vivamus quis lectus turpis. In egestas mattis nulla non pharetra. Suspendisse suscipit non nibh eget volutpat. Fusce placerat mi arcu, convallis pharetra odio vehicula ac. Proin felis lorem, aliquam a elit at, molestie sollicitudin augue. Nam lectus eros, aliquam ut nisi id, sodales efficitur massa.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> 
                <br />
                <br />
                Fusce rhoncus accumsan venenatis. Aliquam at nisl sit amet lectus lacinia imperdiet. Sed vel erat varius, ultricies purus et, consequat lorem. Vivamus elit ipsum, tincidunt ut molestie id, vulputate ut erat. Suspendisse placerat feugiat diam vel elementum. Ut mattis efficitur sapien, non maximus quam tincidunt vel. Nunc in lectus arcu. Nulla pharetra, orci id gravida sagittis, magna neque congue leo, sit amet pretium nunc libero et mauris. Quisque tristique tellus ac nisl tincidunt tristique nec eu quam. Maecenas interdum, dui non maximus maximus, ex ligula sagittis velit, non malesuada risus purus at nisl. Etiam suscipit, lorem id efficitur tristique, eros magna posuere augue, at sagittis sem orci et orci.

                Pellentesque tincidunt neque ac magna maximus cursus. Integer aliquam lectus rhoncus tellus efficitur sollicitudin. Pellentesque eget laoreet mi, vel vestibulum ex. Etiam interdum nisl non quam placerat rhoncus. Integer ac eleifend elit. Etiam eleifend arcu metus. Aliquam et hendrerit velit.
            

                Alt layout – Navbar and Aside are rendered on top on Header and Footer

                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum nec turpis id dignissim. Cras bibendum eros quis justo lobortis volutpat. Morbi pharetra, nisl ac tristique laoreet, mi nisl faucibus velit, vel congue ligula tortor nec leo. Nullam volutpat erat vitae lobortis euismod. Donec quis nibh mollis urna rhoncus tempus id sit amet dui. Morbi efficitur malesuada lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla luctus elit ac justo vulputate lacinia.

                Vestibulum metus neque, auctor sed sem in, consequat pharetra metus. Vivamus vestibulum arcu tincidunt tellus hendrerit lacinia. Nulla facilisi. Ut dignissim, urna luctus lacinia venenatis, libero felis lacinia diam, quis sodales turpis est at justo. Vivamus ut lacinia odio, sit amet egestas elit. Cras vestibulum diam elementum, laoreet enim a, molestie ipsum. In hac habitasse platea dictumst. Sed ac sem justo. Nunc eget condimentum enim. Curabitur porttitor condimentum egestas. Vestibulum tincidunt tortor non iaculis aliquet. Quisque id aliquam odio, eget pulvinar mi.

                <br />
                <br />
                <br />
                Pellentesque suscipit felis a molestie pellentesque. Phasellus rutrum mollis dui sit amet consectetur. Proin scelerisque vulputate neque vitae commodo. Proin vel arcu ornare, varius enim at, tincidunt metus. Vivamus quis tempus est, ac aliquet ex. In hac habitasse platea dictumst. Vestibulum in turpis elementum, egestas sem eleifend, faucibus lorem. Vivamus lectus mi, accumsan sit amet eros a, volutpat pharetra ipsum. Quisque in scelerisque justo. Donec porta congue magna eget commodo. Vivamus quis lectus turpis. In egestas mattis nulla non pharetra. Suspendisse suscipit non nibh eget volutpat. Fusce placerat mi arcu, convallis pharetra odio vehicula ac. Proin felis lorem, aliquam a elit at, molestie sollicitudin augue. Nam lectus eros, aliquam ut nisi id, sodales efficitur massa.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                Fusce rhoncus accumsan venenatis. Aliquam at nisl sit amet lectus lacinia imperdiet. Sed vel erat varius, ultricies purus et, consequat lorem. Vivamus elit ipsum, tincidunt ut molestie id, vulputate ut erat. Suspendisse placerat feugiat diam vel elementum. Ut mattis efficitur sapien, non maximus quam tincidunt vel. Nunc in lectus arcu. Nulla pharetra, orci id gravida sagittis, magna neque congue leo, sit amet pretium nunc libero et mauris. Quisque tristique tellus ac nisl tincidunt tristique nec eu quam. Maecenas interdum, dui non maximus maximus, ex ligula sagittis velit, non malesuada risus purus at nisl. Etiam suscipit, lorem id efficitur tristique, eros magna posuere augue, at sagittis sem orci et orci.

                Pellentesque tincidunt neque ac magna maximus cursus. Integer aliquam lectus rhoncus tellus efficitur sollicitudin. Pellentesque eget laoreet mi, vel vestibulum ex. Etiam interdum nisl non quam placerat rhoncus. Integer ac eleifend elit. Etiam eleifend arcu metus. Aliquam et hendrerit velit.
            
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> 
                <br />
                <br />

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum nec turpis id dignissim. Cras bibendum eros quis justo lobortis volutpat. Morbi pharetra, nisl ac tristique laoreet, mi nisl faucibus velit, vel congue ligula tortor nec leo. Nullam volutpat erat vitae lobortis euismod. Donec quis nibh mollis urna rhoncus tempus id sit amet dui. Morbi efficitur malesuada lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla luctus elit ac justo vulputate lacinia.

                Vestibulum metus neque, auctor sed sem in, consequat pharetra metus. Vivamus vestibulum arcu tincidunt tellus hendrerit lacinia. Nulla facilisi. Ut dignissim, urna luctus lacinia venenatis, libero felis lacinia diam, quis sodales turpis est at justo. Vivamus ut lacinia odio, sit amet egestas elit. Cras vestibulum diam elementum, laoreet enim a, molestie ipsum. In hac habitasse platea dictumst. Sed ac sem justo. Nunc eget condimentum enim. Curabitur porttitor condimentum egestas. Vestibulum tincidunt tortor non iaculis aliquet. Quisque id aliquam odio, eget pulvinar mi.

                Pellentesque suscipit felis a molestie pellentesque. Phasellus rutrum mollis dui sit amet consectetur. Proin scelerisque vulputate neque vitae commodo. Proin vel arcu ornare, varius enim at, tincidunt metus. Vivamus quis tempus est, ac aliquet ex. In hac habitasse platea dictumst. Vestibulum in turpis elementum, egestas sem eleifend, faucibus lorem. Vivamus lectus mi, accumsan sit amet eros a, volutpat pharetra ipsum. Quisque in scelerisque justo. Donec porta congue magna eget commodo. Vivamus quis lectus turpis. In egestas mattis nulla non pharetra. Suspendisse suscipit non nibh eget volutpat. Fusce placerat mi arcu, convallis pharetra odio vehicula ac. Proin felis lorem, aliquam a elit at, molestie sollicitudin augue. Nam lectus eros, aliquam ut nisi id, sodales efficitur massa.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> 
                <br />
                <br />
                Fusce rhoncus accumsan venenatis. Aliquam at nisl sit amet lectus lacinia imperdiet. Sed vel erat varius, ultricies purus et, consequat lorem. Vivamus elit ipsum, tincidunt ut molestie id, vulputate ut erat. Suspendisse placerat feugiat diam vel elementum. Ut mattis efficitur sapien, non maximus quam tincidunt vel. Nunc in lectus arcu. Nulla pharetra, orci id gravida sagittis, magna neque congue leo, sit amet pretium nunc libero et mauris. Quisque tristique tellus ac nisl tincidunt tristique nec eu quam. Maecenas interdum, dui non maximus maximus, ex ligula sagittis velit, non malesuada risus purus at nisl. Etiam suscipit, lorem id efficitur tristique, eros magna posuere augue, at sagittis sem orci et orci.

                Pellentesque tincidunt neque ac magna maximus cursus. Integer aliquam lectus rhoncus tellus efficitur sollicitudin. Pellentesque eget laoreet mi, vel vestibulum ex. Etiam interdum nisl non quam placerat rhoncus. Integer ac eleifend elit. Etiam eleifend arcu metus. Aliquam et hendrerit velit.
            

                Alt layout – Navbar and Aside are rendered on top on Header and Footer

                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum nec turpis id dignissim. Cras bibendum eros quis justo lobortis volutpat. Morbi pharetra, nisl ac tristique laoreet, mi nisl faucibus velit, vel congue ligula tortor nec leo. Nullam volutpat erat vitae lobortis euismod. Donec quis nibh mollis urna rhoncus tempus id sit amet dui. Morbi efficitur malesuada lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla luctus elit ac justo vulputate lacinia.

                Vestibulum metus neque, auctor sed sem in, consequat pharetra metus. Vivamus vestibulum arcu tincidunt tellus hendrerit lacinia. Nulla facilisi. Ut dignissim, urna luctus lacinia venenatis, libero felis lacinia diam, quis sodales turpis est at justo. Vivamus ut lacinia odio, sit amet egestas elit. Cras vestibulum diam elementum, laoreet enim a, molestie ipsum. In hac habitasse platea dictumst. Sed ac sem justo. Nunc eget condimentum enim. Curabitur porttitor condimentum egestas. Vestibulum tincidunt tortor non iaculis aliquet. Quisque id aliquam odio, eget pulvinar mi.

                <br />
                <br />
                <br />
                Pellentesque suscipit felis a molestie pellentesque. Phasellus rutrum mollis dui sit amet consectetur. Proin scelerisque vulputate neque vitae commodo. Proin vel arcu ornare, varius enim at, tincidunt metus. Vivamus quis tempus est, ac aliquet ex. In hac habitasse platea dictumst. Vestibulum in turpis elementum, egestas sem eleifend, faucibus lorem. Vivamus lectus mi, accumsan sit amet eros a, volutpat pharetra ipsum. Quisque in scelerisque justo. Donec porta congue magna eget commodo. Vivamus quis lectus turpis. In egestas mattis nulla non pharetra. Suspendisse suscipit non nibh eget volutpat. Fusce placerat mi arcu, convallis pharetra odio vehicula ac. Proin felis lorem, aliquam a elit at, molestie sollicitudin augue. Nam lectus eros, aliquam ut nisi id, sodales efficitur massa.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                Fusce rhoncus accumsan venenatis. Aliquam at nisl sit amet lectus lacinia imperdiet. Sed vel erat varius, ultricies purus et, consequat lorem. Vivamus elit ipsum, tincidunt ut molestie id, vulputate ut erat. Suspendisse placerat feugiat diam vel elementum. Ut mattis efficitur sapien, non maximus quam tincidunt vel. Nunc in lectus arcu. Nulla pharetra, orci id gravida sagittis, magna neque congue leo, sit amet pretium nunc libero et mauris. Quisque tristique tellus ac nisl tincidunt tristique nec eu quam. Maecenas interdum, dui non maximus maximus, ex ligula sagittis velit, non malesuada risus purus at nisl. Etiam suscipit, lorem id efficitur tristique, eros magna posuere augue, at sagittis sem orci et orci.

                Pellentesque tincidunt neque ac magna maximus cursus. Integer aliquam lectus rhoncus tellus efficitur sollicitudin. Pellentesque eget laoreet mi, vel vestibulum ex. Etiam interdum nisl non quam placerat rhoncus. Integer ac eleifend elit. Etiam eleifend arcu metus. Aliquam et hendrerit velit.
            
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> 
                <br />
                <br />

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum nec turpis id dignissim. Cras bibendum eros quis justo lobortis volutpat. Morbi pharetra, nisl ac tristique laoreet, mi nisl faucibus velit, vel congue ligula tortor nec leo. Nullam volutpat erat vitae lobortis euismod. Donec quis nibh mollis urna rhoncus tempus id sit amet dui. Morbi efficitur malesuada lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla luctus elit ac justo vulputate lacinia.

                Vestibulum metus neque, auctor sed sem in, consequat pharetra metus. Vivamus vestibulum arcu tincidunt tellus hendrerit lacinia. Nulla facilisi. Ut dignissim, urna luctus lacinia venenatis, libero felis lacinia diam, quis sodales turpis est at justo. Vivamus ut lacinia odio, sit amet egestas elit. Cras vestibulum diam elementum, laoreet enim a, molestie ipsum. In hac habitasse platea dictumst. Sed ac sem justo. Nunc eget condimentum enim. Curabitur porttitor condimentum egestas. Vestibulum tincidunt tortor non iaculis aliquet. Quisque id aliquam odio, eget pulvinar mi.

                Pellentesque suscipit felis a molestie pellentesque. Phasellus rutrum mollis dui sit amet consectetur. Proin scelerisque vulputate neque vitae commodo. Proin vel arcu ornare, varius enim at, tincidunt metus. Vivamus quis tempus est, ac aliquet ex. In hac habitasse platea dictumst. Vestibulum in turpis elementum, egestas sem eleifend, faucibus lorem. Vivamus lectus mi, accumsan sit amet eros a, volutpat pharetra ipsum. Quisque in scelerisque justo. Donec porta congue magna eget commodo. Vivamus quis lectus turpis. In egestas mattis nulla non pharetra. Suspendisse suscipit non nibh eget volutpat. Fusce placerat mi arcu, convallis pharetra odio vehicula ac. Proin felis lorem, aliquam a elit at, molestie sollicitudin augue. Nam lectus eros, aliquam ut nisi id, sodales efficitur massa.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> 
                <br />
                <br />
                Fusce rhoncus accumsan venenatis. Aliquam at nisl sit amet lectus lacinia imperdiet. Sed vel erat varius, ultricies purus et, consequat lorem. Vivamus elit ipsum, tincidunt ut molestie id, vulputate ut erat. Suspendisse placerat feugiat diam vel elementum. Ut mattis efficitur sapien, non maximus quam tincidunt vel. Nunc in lectus arcu. Nulla pharetra, orci id gravida sagittis, magna neque congue leo, sit amet pretium nunc libero et mauris. Quisque tristique tellus ac nisl tincidunt tristique nec eu quam. Maecenas interdum, dui non maximus maximus, ex ligula sagittis velit, non malesuada risus purus at nisl. Etiam suscipit, lorem id efficitur tristique, eros magna posuere augue, at sagittis sem orci et orci.

                Pellentesque tincidunt neque ac magna maximus cursus. Integer aliquam lectus rhoncus tellus efficitur sollicitudin. Pellentesque eget laoreet mi, vel vestibulum ex. Etiam interdum nisl non quam placerat rhoncus. Integer ac eleifend elit. Etiam eleifend arcu metus. Aliquam et hendrerit velit.
            
            </AppShell.Main>
            <AppShell.Aside p="xs" />
        </AppShell>
    </Router>
}

export default Main