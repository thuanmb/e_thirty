describe Api::V1::UsersController do
  let(:response_hash) { JSON.parse(response.body, symbolize_names: true) }

  describe 'GET /me' do
    let(:user) { create(:user) }
    let!(:article) { create(
        :article,
        title: ::Faker::Lorem.sentence,
        subtitle: ::Faker::Lorem.sentence,
        image_url: ::Faker::Internet.url,
        content: ::Faker::Lorem.sentence,
        published_at: rand(1..12).minutes.ago,
        user_id: user.id
    ) }

    let(:another_user) { create(:user) }
    let!(:bookmark) { create(:bookmark, user_id: another_user.id, article_id: article.id) }

    context 'when user logged in' do
      before do
        warden.set_user(another_user)
      end

      it 'return information of logged user and list of favourite articles' do
        get :me, format: :json
        expect(response_hash[:status]).to eq 'OK'
        expect(response_hash[:data][:id]).to eq another_user.id
        expect(response_hash[:data][:favourite_articles].first[:id]).to eq article.id
      end
    end

    context 'when user not logged in' do
      before do
        warden.set_user(nil)
      end

      it 'return false' do
        get :me, format: :json
        expect(response_hash[:status]).to eq 'OK'
        expect(response_hash[:data]).to eq false
      end
    end
  end
end