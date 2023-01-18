import { mode } from "@chakra-ui/theme-tools"

export const BoxStyles = {
    'background' : {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex: 0,
        bgGradient: 'linear(to-br, blue.400, green.300, gray.200)',
        _dark: {
            bgGradient: 'linear(to-br, blue.800, green.700, gray.600)'
        }
    },
}