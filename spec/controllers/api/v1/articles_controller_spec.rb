describe Api::V1::ArticlesController do
  let(:response_hash) { JSON.parse(response.body, symbolize_names: true) }

  describe 'GET /index' do
    let(:user) { create(:user) }
    let(:bookmarked) { false }

    before do
      11.times.each do
        article = Article.create(
          title: ::Faker::Lorem.sentence,
          subtitle: ::Faker::Lorem.sentence,
          image_url: ::Faker::Internet.url,
          content: ::Faker::Lorem.sentence,
          published_at: rand(1..12).minutes.ago)

        if bookmarked
          create(:bookmark, user_id: user.id, article_id: article.id)
        end
      end

      warden.set_user(user)
    end

    before do
      get :index, params, format: :json
    end

    context 'when it is the first page' do
      context 'when article not bookmarked' do
        context 'when page is not specific' do
          let(:params) {{}}

          it 'should return list of first 10' do
            expect(response_hash[:status]).to eq 'OK'
            expect(response_hash[:data].length).to eq 10
            expect(response_hash[:data].first[:bookmarked]).to eq false
          end
        end

        context 'when page is specific' do
          let(:params) {{ page: 1 }}

          it 'should return list of first 10' do
            expect(response_hash[:status]).to eq 'OK'
            expect(response_hash[:data].length).to eq 10
          end
        end
      end

      context 'when article bookmarked' do
        let(:bookmarked) { true }
        let(:params) {{}}

        it 'should return list of first 10' do
          expect(response_hash[:status]).to eq 'OK'
          expect(response_hash[:data].length).to eq 10
          expect(response_hash[:data].first[:bookmarked]).to eq true
        end
      end
    end

    context 'when it is the second page' do
      let(:params) {{ page: 2 }}

      it 'should return list of first 10' do
        expect(response_hash[:status]).to eq 'OK'
        expect(response_hash[:data].length).to eq 1
      end
    end

    context 'search article' do
      let(:params) {{ page: 1, query: Article.first.title }}

      it 'should return first article' do
        expect(response_hash[:status]).to eq 'OK'
        expect(response_hash[:data].length).to eq 1
        expect(response_hash[:data].first[:id]).to eq Article.first.id
      end
    end
  end

  describe 'GET /show' do
    let(:article) { create(:article) }

    before do
      warden.set_user(nil)
    end

    it 'should show the article' do
      get :show, id: article.id, format: :json

      expect(response_hash[:status]).to eq 'OK'
      expect(response_hash[:data][:id]).to eq article.id
    end
  end
end