class JournalSerializer
  include FastJsonapi::ObjectSerializer
  attributes :photo_url, :content
end
