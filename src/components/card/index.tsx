import React, { useState } from 'react'
import { Container, Header, Footer } from './styles'
import { CardProps } from './types'
import * as iconSet from 'react-icons/fa'

import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { positionTitle, border, shadow } from './theme'

export function Card(props: CardProps) {
  const [descriptionVisible, setDescriptionVisible] = useState(false)
  const textAlign = positionTitle[props.positionTitle]
  const borderRadius = border[props.border]
  const boxShadow = shadow[props.shadow]

  const finalProps = {
    borderRadius,
    textAlign,
    boxShadow,
    ...props,
  }

  function handleDescriptionVisible() {
    setDescriptionVisible(!descriptionVisible)
  }

  const [
    ButtonLeftTitle,
    ButtonRightTitle,
    ButtonLeftDescription,
    ButtonRightDescription,
  ] = [
    iconSet[props.buttonLeftTitle] ||
      iconSet[`Fa${props.buttonLeftTitle}` as unknown as never],
    iconSet[props.buttonRightTitle] ||
      iconSet[`Fa${props.buttonRightTitle}` as unknown as never],
    iconSet[props.buttonRightDescription] ||
      iconSet[`Fa${props.buttonRightDescription}` as unknown as never],
    iconSet[props.buttonRightDescription] ||
      iconSet[`Fa${props.buttonRightDescription}` as unknown as never],
  ]

  return (
    <Container
      descriptionVisible
      props={finalProps}
      className="DUI-containerCard"
    >
      {/* Header */}
      <Header props={finalProps} className="DUI-containerHeader">
        {props.buttonLeftTitle && (
          <a
            href={props.buttonLeftTitleHref}
            target="_blank"
            className="DUI-buttonLeftTitleHref"
            role="link"
            aria-label="External link"
          >
            <ButtonLeftTitle
              color={props.buttonLeftTitleColor}
              fontSize="24px"
              className="DUI-buttonLeftTitleIcon"
            />
          </a>
        )}

        {props.title && <p className="DUI-cardTitle">{props.title}</p>}

        {props.buttonRightTitle && (
          <a
            href={props.buttonRightTitleHref}
            target="_blank"
            className="DUI-buttonRightTitleHref"
            role="link"
            aria-label="External link"
          >
            <ButtonRightTitle
              color={props.buttonRightTitleColor}
              className="DUI-buttonRightTitleIcon"
            />
          </a>
        )}
      </Header>

      {/* Image */}
      {props.imageUrl && (
        <img
          src={props.imageUrl}
          className="DUI-imageCard"
          alt={props.imageAlt ? props.imageAlt : 'Default Alt'}
        />
      )}

      {/* Footer */}
      {props.buttonRightDescription ||
      props.buttonReadMore ||
      props.buttonLeftDescription ? (
        <Footer className="DUI-containerFooter">
          {props.description && descriptionVisible && (
            <span className="DUI-descriptionText">{props.descriptionText}</span>
          )}

          <div>
            <div>
              {props.buttonLeftDescription && (
                <a
                  href={props.buttonLeftDescriptionHref}
                  target="_blank"
                  className="DUI-buttonLeftDescriptionHref"
                  role="link"
                  aria-label="External link"
                >
                  <ButtonLeftDescription
                    color={props.buttonLeftDescriptionColor}
                    fontSize="24px"
                    className="DUI-buttonLeftDescriptionIcon"
                  />
                </a>
              )}
              {props.buttonRightDescription && (
                <a
                  href={props.buttonRightDescriptionHref}
                  target="_blank"
                  className="DUI-buttonRightDescriptionHref"
                  role="link"
                  aria-label="External link"
                >
                  <ButtonRightDescription
                    color={props.buttonRightDescriptionColor}
                    fontSize="24px"
                    className="DUI-buttonRightDescriptionIcon"
                  />
                </a>
              )}
            </div>

            {props.buttonReadMore && descriptionVisible ? (
              <button
                onClick={handleDescriptionVisible}
                className="DUI-buttonReadMore"
              >
                See less
                <FaArrowUp className="DUI-buttonReadMoreIcon" />
              </button>
            ) : (
              props.buttonReadMore &&
              !descriptionVisible && (
                <button
                  onClick={handleDescriptionVisible}
                  className="DUI-buttonReadMore"
                >
                  View more
                  <FaArrowDown className="DUI-buttonReadMoreIcon" />
                </button>
              )
            )}
          </div>
        </Footer>
      ) : null}
    </Container>
  )
}

Card.defaultProps = {
  backgroundColor: '#FFFFFF',
  buttonLeftTitleHref: '/',
  buttonRightTitleHref: '/',
  buttonLeftDescriptionHref: '/',
  buttonRightDescriptionHref: '/',

  buttonLeftTitleColor: '#6648FF',
  buttonRightTitleColor: '#6648FF',
  buttonLeftDescriptionColor: '#6648FF',
  buttonRightDescriptionColor: '#6648FF',

  imageAlt: '',

  border: 'small',
  shadow: 'medium',
}
