require 'feedjira'

class ScreencastImporter
	def self.import_railscasts
		Feedjira::Feed.add_common_feed_entry_element(:enclosure, :value => :url, :as => :video_url)
		Feedjira::Feed.add_common_feed_entry_element('itunes:duration', :as => :duration)

		success_callback = lambda { |url, feed| puts url, feed }
		failure_callback = lambda { |curl, err| puts curl, err }
		feed = Feedjira::Feed.fetch_and_parse "http://feeds.feedburner.com/railscasts", on_sucess: success_callback, on_failure: failure_callback
		
		feed.entries.each do |entry|

			# Strip out the episode number from the title
			title = entry.title.gsub(/^#\d+\s/, '')
			puts title
			# Find or create the screencast data into our database
			Screencast.where(video_url: entry.video_url).first_or_create(
			title:        title,
			summary:      entry.summary,
			duration:     entry.duration,
			link:         entry.url,
			published_at: entry.published,
			source:       'railscasts' # set this manually
			)
		end

    # Return the number of total screencasts for the source
    Screencast.where(source: 'railscasts').count
  	end
end