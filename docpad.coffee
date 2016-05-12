# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
	# Template Data
  # =============
  # These are variables that will be accessible via our templates
  # To access one of these within our templates, refer to the FAQ: https://github.com/bevry/docpad/wiki/FAQ

  templateData:

    # Specify some site properties
    site:
      # The production url of our website
      url: "http://othstimecapsule.us/"

      # Here are some old site urls that you would like to redirect from
      oldUrls: []

      # The default title of our website
      title: "OTHS Time Capsule"

      # The website description (for SEO)
      description: """
        While we may not be allowed to bury a physical time capsule on campus, we're certainly allowed to make a digital one. All you have to do is answer a few questions about your life in general and then upload a short video. In 20 years, we'll send you your data so your children can make fun of you and your stone-age technology. Trust us, it will be fun.
        """

      # The website keywords (for SEO) separated by commas
      keywords: """
        o'fallon, township, high, school, senior, class, 2014, time, capsule, app, pictures, videos, questions, twenty, years
        """

      # The website author's name
      author: "Kevin Dice"

      # The website author's email
      email: "kevin.dice1@gmail.com"

      # Your company's name
      copyright: "© Kevin Dice 2014"


    # Helper Functions
    # ----------------

    # Get the prepared site/document title
    # Often we would like to specify particular formatting to our page's title
    # we can apply that formatting here
    getPreparedTitle: ->
      # if we have a document title, then we should use that and suffix the site's title onto it
      if @document.title
        "#{@document.title} | #{@site.title}"
      # if our document does not have it's own title, then we should just use the site's title
      else
        @site.title

    # Get the prepared site/document description
    getPreparedDescription: ->
      # if we have a document description, then we should use that, otherwise use the site's description
      @document.description or @site.description

    # Get the prepared site/document keywords
    getPreparedKeywords: ->
      # Merge the document keywords with the site keywords
      @site.keywords.concat(@document.keywords or []).join(', ')
}

# Export the DocPad Configuration
module.exports = docpadConfig