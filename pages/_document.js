import Document, {
    Html,
    Head,
    Main,
    NextScript,
  } from 'next/document'

  class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)

      return initialProps
    }

    render() {
      return (
        <Html>
          <Head>
          <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital@1&family=Mr+Dafoe&family=Nunito:wght@200&display=swap" rel="stylesheet"/>

          </Head>
          <body>
            <Main />
            <NextScript />
          </body>


         
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
{function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/634e7125b0d6371309ca1d62/1gfl6jvc7';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
}}();
</script>
        </Html>
      )
    }
  }

  export default MyDocument