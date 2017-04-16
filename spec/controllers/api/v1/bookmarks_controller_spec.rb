describe Api::V1::BookmarksController do
  let(:response_hash) { JSON.parse(response.body, symbolize_names: true) }

  describe 'GET /' do
    let(:user) { create(:user) }
    let(:another_user) { create(:user) }
    let(:another_article) { create(:article, user_id: another_user.id) }
    let!(:another_bookmark) { create(:bookmark, user: another_user, article: another_article) }

    before do
      11.times.each do
        article = create(:article, user: user)
        create(:bookmark, user: user, article: article)
      end

      warden.set_user(user)
    end

    context 'when first page' do
      it 'should return list of book mark of current user bookmark' do
        get :index, format: :json
        expect(response_hash[:status]).to eq 'OK'
        expect(response_hash[:data].size).to eq 10
      end
    end

    context 'when second page' do
      it 'should return list of book mark of current user bookmark' do
        get :index, page: 2, format: :json
        expect(response_hash[:status]).to eq 'OK'
        expect(response_hash[:data].size).to eq 1
      end
    end
  end

  describe 'POST /' do
    let(:user) { create(:user) }
    let(:article) { create(
        :article,
        title: ::Faker::Lorem.sentence,
        subtitle: ::Faker::Lorem.sentence,
        cover_image: ::Faker::Internet.url,
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