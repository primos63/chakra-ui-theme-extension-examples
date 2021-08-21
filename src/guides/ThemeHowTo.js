export const markdown = `
# How do I extend a theme
In order to extend a theme, one should thoroughly read the documentation on theming.  The most common mistake made is specifying a component  and defining a \`baseStyle\` with all the CSS properties desired.  That simply doesn't work.  Some components are single part components and some are multi-part components.  Those parts are important.  The key to successfully being able to extend a theme is to use the theme source for a component as a guide. Components with a theme source will have a link on their documentation page, \`View theme source\`. In the case of \`Tag\` this is the [View theme source](https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/tag.ts) link.

Doing so for \`Tag\` immediately tells the developer that it is a multi-part component
~~~js
const parts = ["container", "label", "closeButton"]
~~~
\`Tag\` is composed of three parts, \`container\`, \`label\` and a \`closeButton\`.

Scrolling down to the bottom, the developer will find the \`defaultProps\`
~~~js
const defaultProps = {
  size: "md",
  variant: "subtle",
  colorScheme: "gray",
}
~~~
Note that the default size is \`md\`, the default variant is \`subtle\` and default color scheme is \`gray\`.
Scrolling up, to the \`variants\` declaration, there are three variants defined for \`Tag\`, \`subtle\` the default, \`solid\` and \`outline\`. Each of the variants modifies the \`container\` part of the component.
~~~js
const variants = {
  subtle: (props: Dict) => ({
    container: Badge.variants.subtle(props),
  }),
  solid: (props: Dict) => ({
    container: Badge.variants.solid(props),
  }),
  outline: (props: Dict) => ({
    container: Badge.variants.outline(props),
  }),
}
~~~
Each variant relies on the \`Badge\` variant of the same name which returns the background color and color properties.

At this point the developer has three choices:
 1. Modify one of the existing variants
 2. Create a new variant
 3. Override the baseStyle for the part(s)
 
 ## Modify one of the existing variants
Let's modify the \`subtle\` variant for \`Tag\`. The properties in the variant section will take priority over those defined in \`baseStyle\`.  So this is a good place to make your changes. Let's say we want our variant to have a border of 2 px, a borderColor of red.500 light mode and white in dark mode and override the background color when in light mode to a provided colorScheme at level 50. We'd write
 ~~~js
 variants: {
   subtle: (props) => {
     const { colorScheme: c, theme } = props
     const { bg: bgBadge } theme.components.Badge.variants.subtle(props)
     return {
       container: {
         bg: mode(\`\${c}.50\`, bgBadge)(props),
         border: "2px",
         borderColor: mode('red.500', 'white')
       }
     }
   }
 }
 ~~~  
 Now if in our app we use \`<Tag size="lg" colorScheme="teal">Teal</Tag>\`, we're presented with an ugly tag 
![image](https://user-images.githubusercontent.com/2768849/129653614-a59bd467-3940-46f7-a463-6d6044d2c264.png)
and its dark mode version 
![image](https://user-images.githubusercontent.com/2768849/129653812-2e30169f-3a4b-4c62-8901-3b8dac1bb113.png)
## Create a new variant
The only difference between creating and modifying a variant is that you are adding to the variants object your own variant. Instead of \`subtle\` we want to give our variant an appropriate name, \`ugly\`. So we write
 ~~~js
 variants: {
   ugly: (props) => {
     const { colorScheme: c, theme } = props
     const { bg: bgBadge } theme.components.Badge.variants.subtle(props)
     return {
       container: {
         bg: mode(\`\${c}.50\`, bgBadge)(props),
         border: "2px",
         borderColor: mode('red.500', 'white')
       }
     }
   }
 }
 ~~~  
 Back in our app we change the \`Tag\` to specify the new variant \`<Tag variant="ugly" size="lg" colorScheme="teal">Teal</Tag>\`.
 That's impressive! So much so, we want to make our variant the default!
 ~~~js
 variants: {
   ugly: (props) => {
     const { colorScheme: c, theme } = props
     const { bg: bgBadge } theme.components.Badge.variants.subtle(props)
     return {
       container: {
         bg: mode(\`\${c}.50\`, bgBadge)(props),
         border: "2px",
         borderColor: mode('red.500', 'white')
       }
     }
   }
 },
 defaultProps: {
   variant: 'ugly'
 }
 ~~~
 We no longer need to specify the variant when using \`Tag\`. Hurray!
 ## Override the baseStyle for the part(s)
 We don't like Chakra's default theme for \`Tag\` and are never going to require it, so let's rewrite it to our liking. The \`baseStyle\` is defined as
 ~~~js
const baseStyle = {
  container: baseStyleContainer,
  label: baseStyleLabel,
  closeButton: baseStyleCloseButton,
}
~~~
We see that it's an object with the keys \`container\`,  \`label\` and \`closeButton\` whose values are functions. Those functions set the CSS properties to style the part. After looking at the functions for \`label\` and \`closeButton\` we decide that those Chakra devs weren't so bad and that we'll keep these two parts as-is, but change the \`container\` part to our liking.
~~~js
export const TagTheme = {
  components: {
    Tag: {
      baseStyle: {
        container: {
          color: "blue",
          bg: "white",
          border: "2px",
          px: 8,
          _focus: {
            boxShadow: "0 0 0 1px #65B2E8"
          },
          _hover: {
            boxShadow: "0 0 0 1px #65B2E8"
          }
        }
      },
      variants: {
        ugly: (props) => {
          const { colorScheme: c, theme } = props;
          const { bg: bgBadge } = theme.components.Badge.variants.subtle(props);
          return {
            container: {
              bg: mode(\`\${c}.50\`, bgBadge)(props),
              border: "2px",
              borderColor: mode("red.500", "white")(props)
            }
          };
        }
      },
      defaultProps: {
        variant: "ugly"
      }
    }
  }
};
~~~
That's great! We're ready to see our custom theme in action, but we find the bg and color aren't what we specified in the \`baseStyle\`. Why? Well the properties in the variant are merged in after the other properties are merged. The have a higher precedence.  I know! Let's remove the \`ugly\` variant and the \`defaultProps\`.  Hmmm, the colors still aren't right. Why? The default variant for \`Tag\` is \`subtle\` and since we removed our default \`ugly\`, \`subtle\` is back as default and overrides our color and background color.
### But I don't want variants at all
Okay well we can use a subtle approach and set the default variant to 'none'.
~~~js
const theme = {
  components: {
    Tag: {
      baseStyle: {
      },
      defaultProps: {
        variant: 'none'
      }
    }
  }
}
~~~
I'm not subtle and where I'm going I don't need variants.  So how can I remove them from the theme for \`Tag\`? Delete them!
~~~js
import { extendTheme } from "@chakra-ui/react";
import defaultTheme from "@chakra-ui/theme";

const theme = {
  components: {
    Tag: {
      baseStyle: {
        container: {
          bg: "blue.400",
          color: "white",
          _focus: {
            boxShadow: "0 0 0 1px #65B2E8"
          }
        }
      }
    }
  }
};

const themeVariants = defaultTheme.components.Tag.variants
for (const key of Object.keys(themeVariants)) {
  delete themeVariants[key]
}
delete defaultTheme.components.Tag.defaultProps.variant;

export const custTheme = extendTheme(theme, defaultTheme);
~~~
Poof! Those pesky \`Tag\` variants and its default variant setting are gone. Hurray!

### Note
Remember \`extendTheme\` merges your theme with the default theme. \`Tag\`'s base style container has three other properties that we did not override.
~~~js
const baseStyleContainer = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  _focus: {
    boxShadow: "outline",
  },
}
~~~
If you don't like/want \`fontWeight\`, \`lineHeight\` and/or \`outline\` in your theme, either override them or remove them.
`
