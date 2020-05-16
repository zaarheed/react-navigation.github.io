(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{300:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(1),i=t(9),o=(t(0),t(476)),r={id:"auth-flow",title:"Authentication flows",sidebar_label:"Authentication flows"},s={id:"version-5.x/auth-flow",title:"Authentication flows",description:"Most apps require that a user authenticate in some way to have access to data associated with a user or other private content. Typically the flow will look like this:",source:"@site/versioned_docs/version-5.x/auth-flow.md",permalink:"/docs/auth-flow",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/auth-flow.md",version:"5.x",sidebar_label:"Authentication flows",sidebar:"version-5.x/docs",previous:{title:"Drawer navigation",permalink:"/docs/drawer-based-navigation"},next:{title:"Supporting safe areas",permalink:"/docs/handling-safe-area"}},c=[{value:"What we need",id:"what-we-need",children:[]},{value:"How it will work",id:"how-it-will-work",children:[]},{value:"Define our screens",id:"define-our-screens",children:[]},{value:"Implement the logic for restoring the token",id:"implement-the-logic-for-restoring-the-token",children:[]},{value:"Fill in other components",id:"fill-in-other-components",children:[]}],l={rightToc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Most apps require that a user authenticate in some way to have access to data associated with a user or other private content. Typically the flow will look like this:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The user opens the app."),Object(o.b)("li",{parentName:"ul"},"The app loads some authentication state from persistent storage (for example, ",Object(o.b)("inlineCode",{parentName:"li"},"AsyncStorage"),")."),Object(o.b)("li",{parentName:"ul"},"When the state has loaded, the user is presented with either authentication screens or the main app, depending on whether valid authentication state was loaded."),Object(o.b)("li",{parentName:"ul"},"When the user signs out, we clear the authentication state and send them back to authentication screens.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'Note: We say "authentication screens" because usually there is more than one. You may have a main screen with a username and password field, another for "forgot password", and another set for sign up.')),Object(o.b)("h2",{id:"what-we-need"},"What we need"),Object(o.b)("p",null,"This is the behavior that we want from the authentication flow: when users sign in, we want to throw away the state of the authentication flow and unmount all of the screens related to authentication, and when we press the hardware back button we expect to not be able to go back to the authentication flow."),Object(o.b)("h2",{id:"how-it-will-work"},"How it will work"),Object(o.b)("p",null,"We can define different screens based on some condition. For example, if the user is signed in, we can define ",Object(o.b)("inlineCode",{parentName:"p"},"Home"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Profile"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Settings")," etc. If the user is not signed in, we can define ",Object(o.b)("inlineCode",{parentName:"p"},"SignIn")," and ",Object(o.b)("inlineCode",{parentName:"p"},"SignUp")," screens."),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'isSignedIn ? (\n  <>\n    <Stack.Screen name="Home" component={HomeScreen} />\n    <Stack.Screen name="Profile" component={ProfileScreen} />\n    <Stack.Screen name="Settings" component={SettingsScreen} />\n  </>\n) : (\n  <>\n    <Stack.Screen name="SignIn" component={SignInScreen} />\n    <Stack.Screen name="SignUp" component={SignUpScreen} />\n  </>\n)\n')),Object(o.b)("p",null,"When we define screens like this, when ",Object(o.b)("inlineCode",{parentName:"p"},"isSignedIn")," is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", React Navigation will only see the ",Object(o.b)("inlineCode",{parentName:"p"},"Home"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Profile")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Settings")," screens, and when it's ",Object(o.b)("inlineCode",{parentName:"p"},"false"),", React Navigation will see the ",Object(o.b)("inlineCode",{parentName:"p"},"SignIn")," and ",Object(o.b)("inlineCode",{parentName:"p"},"SignUp")," screens. This makes it impossible to navigate to the ",Object(o.b)("inlineCode",{parentName:"p"},"Home"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Profile")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Settings")," screens when the user is not signed in, and to ",Object(o.b)("inlineCode",{parentName:"p"},"SignIn")," and ",Object(o.b)("inlineCode",{parentName:"p"},"SignUp")," screens when the user is signed in."),Object(o.b)("p",null,'This pattern has been in use by other routing libraries such as React Router for a long time, and is commonly known as "Protected routes". Here, our screens which need the user to be signed in are "protected" and cannot be navigated to by other means if the user is not signed in.'),Object(o.b)("p",null,"The magic happens when the value of the ",Object(o.b)("inlineCode",{parentName:"p"},"isSignedIn")," variable changes. Let's say, initially ",Object(o.b)("inlineCode",{parentName:"p"},"isSignedIn")," is ",Object(o.b)("inlineCode",{parentName:"p"},"false"),". This means, either ",Object(o.b)("inlineCode",{parentName:"p"},"SignIn")," or ",Object(o.b)("inlineCode",{parentName:"p"},"SignUp")," screens are shown. After the user signs in, the value of ",Object(o.b)("inlineCode",{parentName:"p"},"isSignedIn")," will change to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),". React Navigation will see that the ",Object(o.b)("inlineCode",{parentName:"p"},"SignIn")," and ",Object(o.b)("inlineCode",{parentName:"p"},"SignUp")," screens are no longer defined and so it will remove them. Then it'll show the ",Object(o.b)("inlineCode",{parentName:"p"},"Home")," screen automatically because that's the first screen defined when ",Object(o.b)("inlineCode",{parentName:"p"},"isSignedIn")," is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("p",null,"It's important to note that when using such a setup, you ",Object(o.b)("strong",{parentName:"p"},"don't need to navigate")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"Home")," screen manually by calling ",Object(o.b)("inlineCode",{parentName:"p"},"navigation.navigate('Home')"),". React Navigation will automatically navigate to the ",Object(o.b)("inlineCode",{parentName:"p"},"Home")," screen when ",Object(o.b)("inlineCode",{parentName:"p"},"isSignedIn")," becomes ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("p",null,"This takes advantage of a new feature in React Navigation: being able to dynamically define and alter the screen definitions of a navigator based on props or state. The example shows stack navigator, but you can use the same approach with any navigator."),Object(o.b)("p",null,"By conditionally defining different screens based on a variable, we can implement auth flow in a simple way that doesn't require additional logic to make sure that the correct screen is shown."),Object(o.b)("h2",{id:"define-our-screens"},"Define our screens"),Object(o.b)("p",null,"In our navigator, we can conditionally define appropriate screens. For our case, let's say we have 3 screens:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SplashScreen")," - This will show a splash or loading screen when we're restoring the token."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SignInScreen")," - This is the screen we show if the user isn't signed in already (we couldn't find a token)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"HomeScreen")," - This is the screen we show if the user is already signed in.")),Object(o.b)("p",null,"So our navigator will look like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"if (state.isLoading) {\n  // We haven't finished checking for the token yet\n  return <SplashScreen />;\n}\n\nreturn (\n  <Stack.Navigator>\n    {state.userToken == null ? (\n      // No token found, user isn't signed in\n      <Stack.Screen\n        name=\"SignIn\"\n        component={SignInScreen}\n        options={{\n          title: 'Sign in',\n          // When logging out, a pop animation feels intuitive\n          // You can remove this if you want the default 'push' animation\n          animationTypeForReplace: state.isSignout ? 'pop' : 'push',\n        }}\n      />\n    ) : (\n      // User is signed in\n      <Stack.Screen name=\"Home\" component={HomeScreen} />\n    )}\n  </Stack.Navigator>\n);\n")),Object(o.b)("p",null,"In the above snippet, ",Object(o.b)("inlineCode",{parentName:"p"},"isLoading")," means that we're still checking if we have a token. This can usually be done by checking if we have a token in ",Object(o.b)("inlineCode",{parentName:"p"},"AsyncStorage")," and validating the token. After we get the token and if it's valid, we need to set the ",Object(o.b)("inlineCode",{parentName:"p"},"userToken"),". We also have another state called ",Object(o.b)("inlineCode",{parentName:"p"},"isSignout")," to have a different animation on sign out."),Object(o.b)("p",null,"The main thing to notice is that we're conditionally defining screens based on these state variables:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SignIn")," screen is only defined if ",Object(o.b)("inlineCode",{parentName:"li"},"userToken")," is ",Object(o.b)("inlineCode",{parentName:"li"},"null")," (user is not signed in)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Home")," screen is only defined if ",Object(o.b)("inlineCode",{parentName:"li"},"userToken")," is non-null (user is signed in)")),Object(o.b)("p",null,"Here, we're conditionally defining one screen for each case. But you could also define multiple screens. For example, you probably want to define password reset, signup, etc screens as well when the user isn't signed in. Similarly for the screens accessible after sign in, you probably have more than one screen. We can use ",Object(o.b)("inlineCode",{parentName:"p"},"React.Fragment")," to define multiple screens:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'state.userToken == null ? (\n  <>\n    <Stack.Screen name="SignIn" component={SignInScreen} />\n    <Stack.Screen name="SignUp" component={SignUpScreen} />\n    <Stack.Screen name="ResetPassword" component={ResetPassword} />\n  </>\n) : (\n  <>\n    <Stack.Screen name="Home" component={HomeScreen} />\n    <Stack.Screen name="Profile" component={ProfileScreen} />\n  </>\n);\n')),Object(o.b)("h2",{id:"implement-the-logic-for-restoring-the-token"},"Implement the logic for restoring the token"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: The following is just an example of how you might implement the logic for authentication in your app. You don't need to follow it as is.")),Object(o.b)("p",null,"From the previous snippet, we can see that we need 3 state variables:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"isLoading")," - We set this to ",Object(o.b)("inlineCode",{parentName:"li"},"true")," when we're trying to check if we already have a token saved in ",Object(o.b)("inlineCode",{parentName:"li"},"AsyncStorage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"isSignout")," - We set this to ",Object(o.b)("inlineCode",{parentName:"li"},"true")," when user is signing out, otherwise set it to ",Object(o.b)("inlineCode",{parentName:"li"},"false")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"userToken")," - The token for the user. If it's non-null, we assume the user is logged in, otherwise not.")),Object(o.b)("p",null,"So we need to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add some logic for restoring token, sign in and sign out"),Object(o.b)("li",{parentName:"ul"},"Expose methods for sign in and sign out to other components")),Object(o.b)("p",null,"We'll use ",Object(o.b)("inlineCode",{parentName:"p"},"React.useReducer")," and ",Object(o.b)("inlineCode",{parentName:"p"},"React.useContext")," in this guide. But if you're using a state management library such as Redux or Mobx, you can use them for this functionality instead. In fact, in bigger apps, a global state management library is more suitable for storing authentication tokens. You can adapt the same approach to your state management library."),Object(o.b)("p",null,"First we'll need to create a context for auth where we can expose necessary methods:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\n\nconst AuthContext = React.createContext();\n")),Object(o.b)("p",null,"So our component will look like this:"),Object(o.b)("samp",{id:"auth-flow"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport AsyncStorage from '@react-native-community/async-storage';\n\nexport default function App({ navigation }) {\n  const [state, dispatch] = React.useReducer(\n    (prevState, action) => {\n      switch (action.type) {\n        case 'RESTORE_TOKEN':\n          return {\n            ...prevState,\n            userToken: action.token,\n            isLoading: false,\n          };\n        case 'SIGN_IN':\n          return {\n            ...prevState,\n            isSignout: false,\n            userToken: action.token,\n          };\n        case 'SIGN_OUT':\n          return {\n            ...prevState,\n            isSignout: true,\n            userToken: null,\n          };\n      }\n    },\n    {\n      isLoading: true,\n      isSignout: false,\n      userToken: null,\n    }\n  );\n\n  React.useEffect(() => {\n    // Fetch the token from storage then navigate to our appropriate place\n    const bootstrapAsync = async () => {\n      let userToken;\n\n      try {\n        userToken = await AsyncStorage.getItem('userToken');\n      } catch (e) {\n        // Restoring token failed\n      }\n\n      // After restoring token, we may need to validate it in production apps\n\n      // This will switch to the App screen or Auth screen and this loading\n      // screen will be unmounted and thrown away.\n      dispatch({ type: 'RESTORE_TOKEN', token: userToken });\n    };\n\n    bootstrapAsync();\n  }, []);\n\n  const authContext = React.useMemo(\n    () => ({\n      signIn: async data => {\n        // In a production app, we need to send some data (usually username, password) to server and get a token\n        // We will also need to handle errors if sign in failed\n        // After getting token, we need to persist the token using `AsyncStorage`\n        // In the example, we'll use a dummy token\n\n        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });\n      },\n      signOut: () => dispatch({ type: 'SIGN_OUT' }),\n      signUp: async data => {\n        // In a production app, we need to send user data to server and get a token\n        // We will also need to handle errors if sign up failed\n        // After getting token, we need to persist the token using `AsyncStorage`\n        // In the example, we'll use a dummy token\n\n        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });\n      },\n    }),\n    []\n  );\n\n  return (\n    <AuthContext.Provider value={authContext}>\n      <Stack.Navigator>\n        {state.userToken == null ? (\n          <Stack.Screen name=\"SignIn\" component={SignInScreen} />\n        ) : (\n          <Stack.Screen name=\"Home\" component={HomeScreen} />\n        )}\n      </Stack.Navigator>\n    </AuthContext.Provider>\n  );\n}\n")),Object(o.b)("h2",{id:"fill-in-other-components"},"Fill in other components"),Object(o.b)("p",null,"We won't talk about how to implement the text inputs and buttons for the authentication screen, that is outside of the scope of navigation. We'll just fill in some placeholder content."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function SignInScreen() {\n  const [username, setUsername] = React.useState(\'\');\n  const [password, setPassword] = React.useState(\'\');\n\n  const { signIn } = React.useContext(AuthContext);\n\n  return (\n    <View>\n      <TextInput\n        placeholder="Username"\n        value={username}\n        onChangeText={setUsername}\n      />\n      <TextInput\n        placeholder="Password"\n        value={password}\n        onChangeText={setPassword}\n        secureTextEntry\n      />\n      <Button title="Sign in" onPress={() => signIn({ username, password })} />\n    </View>\n  );\n}\n')))}p.isMDXComponent=!0},476:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},u=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,h=u["".concat(r,".").concat(d)]||u[d]||b[d]||o;return t?i.a.createElement(h,s({ref:n},l,{components:t})):i.a.createElement(h,s({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);