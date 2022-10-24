import React, { useState } from 'react'
import { Container, Image, Header, Title, Description } from './styles'
import {
  CardRootProps,
  CardHeaderProps,
  CardIconProps,
  CardTitleProps,
  CardImageProps,
  CardDescriptionProps,
} from './types'

import { border, shadow } from './theme'
import { Slot } from '@radix-ui/react-slot'

function CardRoot({ children, ...props }: CardRootProps) {
  return (
    <Container border={border[props.border]} shadow={shadow[props.shadow]}>
      {children}
    </Container>
  )
}

CardRoot.displayName = 'Card.Root'

function CardHeader({ children }: CardHeaderProps) {
  return <Header>{children}</Header>
}

CardHeader.displayName = 'Card.Header'

function CardIcon({ children }: CardIconProps) {
  return <Slot>{children}</Slot>
}

CardIcon.displayName = 'Card.Icon'

function CardTitle({ children }: CardTitleProps) {
  return <Title>{children}</Title>
}

CardTitle.displayName = 'Card.Title'

function CardImage({ url, alt }: CardImageProps) {
  return <Image src={url} alt={alt} />
}

CardImage.displayName = 'Card.Image'

function CardDescription({ children }: CardDescriptionProps) {
  const [descriptionVisible, setDescriptionVisible] = useState(false)

  function handleDescriptionVisible() {
    setDescriptionVisible(!descriptionVisible)
  }

  return (
    <Description>
      {descriptionVisible ? <span>{children}</span> : null}
      {descriptionVisible ? (
        <button onClick={handleDescriptionVisible}>See less</button>
      ) : (
        <button onClick={handleDescriptionVisible}>View more</button>
      )}
    </Description>
  )
}

CardDescription.displayName = 'Card.Description'

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Icon: CardIcon,
  Title: CardTitle,
  Image: CardImage,
  Description: CardDescription,
}

// Card.defaultProps = {
//   backgroundColor: '#FFFFFF',
//   buttonLeftTitleHref: '/',
//   buttonRightTitleHref: '/',
//   buttonLeftDescriptionHref: '/',
//   buttonRightDescriptionHref: '/',

//   buttonLeftTitleColor: '#6648FF',
//   buttonRightTitleColor: '#6648FF',
//   buttonLeftDescriptionColor: '#6648FF',
//   buttonRightDescriptionColor: '#6648FF',

//   imageAlt: '',

//   border: 'small',
//   shadow: 'medium',
// }
