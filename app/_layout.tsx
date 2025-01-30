import { Stack } from expo-router
import '../global.css'

export default function Layout() {
  return (
    <Stack >
        <Stack.Screen name='(tabs)'/>
        <Stack.Screen name='(auth)'/>
        <Stack.Screen name='index'/>
    </Stack>
  )
}
 
//  The  Stack  component is a layout component that will render its children in a vertical stack. 
//  Now, let's create a new page component that will be rendered inside the layout.