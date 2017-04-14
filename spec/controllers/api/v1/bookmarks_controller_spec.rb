describe Api::V1::BookmarksController do
  let(:response_hash) { JSON.parse(response.body, symbolize_names: true) }

  describe 'POST /' do
    let(:user) { create(:user) }
    let(:article) { create(
        :article,
        title: ::Faker::Lorem.sentence,
        subtitle: ::Faker::Lorem.sentence,
        image_url: ::Faker::Internet.url,
        content: ::Faker::Lorem.sentence,
        published_at: rand(1..12).minutes.ago,
        user_id: user.id
    ) }
    let(:params) {{
      article_id: article.id
    }}

    before do
      warden.set_user(user)
    end

    it 'should create new bookmark' do
      expect {
        post :create, params, format: :json
      }.to change{Bookmark.count}.from(0).to(1)
    end
  end
end