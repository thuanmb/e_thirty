describe Api::V1::ArticlesController do
  let(:response_hash) { JSON.parse(response.body, symbolize_names: true) }

  describe 'GET /index' do
    before do
      11.times.each do
        Article.create(
            title: ::Faker::Lorem.sentence,
            subtitle: ::Faker::Lorem.sentence,
            image_url: ::Faker::Internet.url,
            content: ::Faker::Lorem.sentence,
            published_at: rand(1..12).minutes.ago)
      end
    end

    before do
      get :index, params, format: :json
    end

    context 'when it is the first page' do
      context 'when page is not specific' do
        let(:params) {{}}

        it 'should return list of first 10' do
          expect(response_hash[:status]).to eq 'OK'
          expect(response_hash[:data].length).to eq 10
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

    context 'when it is the second page' do
      let(:params) {{ page: 2 }}

      it 'should return list of first 10' do
        expect(response_hash[:status]).to eq 'OK'
        expect(response_hash[:data].length).to eq 1
      end
    end
  end
end