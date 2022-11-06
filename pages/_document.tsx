import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { extractCritical } from '@emotion/server'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    const critical = extractCritical(initialProps.html)
    initialProps.html = critical.html

    initialProps.styles = (
      <>
        {initialProps.styles}
        <style
          data-emotion-css={critical.ids.join(' ')}
          dangerouslySetInnerHTML={{ __html: critical.css }}
        />
      </>
    )

    return initialProps
  }
}

export default MyDocument